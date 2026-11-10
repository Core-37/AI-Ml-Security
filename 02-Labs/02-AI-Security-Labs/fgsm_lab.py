# Лабораторная 1: Атака FGSM и защита Adversarial Training (PyTorch, работает без интернета)
# Запуск: python fgsm_lab.py
import torch
import torch.nn as nn
import torch.nn.functional as F
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split

torch.manual_seed(0)

# 1. Данные: 1797 картинок рукописных цифр 8x8 (встроены в scikit-learn)
digits = load_digits()
X = torch.tensor(digits.data / 16.0, dtype=torch.float32)   # яркость пикселей -> [0, 1]
y = torch.tensor(digits.target, dtype=torch.long)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 2. Модель: полносвязная сеть (64 пикселя -> 64 нейрона -> 10 классов)
def make_model():
    return nn.Sequential(nn.Linear(64, 64), nn.ReLU(), nn.Linear(64, 10))

def train(model, epochs=200, adv_eps=None):
    opt = torch.optim.Adam(model.parameters(), lr=0.01)
    for _ in range(epochs):
        loss = F.cross_entropy(model(X_train), y_train)
        if adv_eps:  # Защита (Adversarial Training): обучаем и на чистых, и на атакованных примерах
            x_adv = fgsm(model, X_train, y_train, adv_eps)
            loss = 0.5 * loss + 0.5 * F.cross_entropy(model(x_adv), y_train)
        opt.zero_grad()
        loss.backward()
        opt.step()
    return model

# 3. Атака FGSM: x_adv = x + eps * sign(градиент ошибки ПО ВХОДУ)
def fgsm(model, x, y, eps):
    x = x.clone().requires_grad_(True)
    loss = F.cross_entropy(model(x), y)
    grad = torch.autograd.grad(loss, x)[0]   # в какую сторону менять пиксели, чтобы ошибка РОСЛА
    return (x + eps * grad.sign()).clamp(0, 1).detach()

def accuracy(model, x, y):
    with torch.no_grad():
        return (model(x).argmax(dim=1) == y).float().mean().item()

def report(name, model):
    print(f"\n=== {name} ===")
    for eps in [0.0, 0.05, 0.1, 0.2]:
        x_eval = X_test if eps == 0 else fgsm(model, X_test, y_test, eps)
        print(f"eps={eps:<4}  точность: {accuracy(model, x_eval, y_test):6.1%}")

if __name__ == "__main__":
    normal = train(make_model())
    report("Обычная модель (без защиты)", normal)

    robust = train(make_model(), adv_eps=0.1)
    report("Модель после Adversarial Training (eps=0.1)", robust)

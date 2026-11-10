# Лабораторная 2: Бэкдор в модели через отравление данных (идея статьи BadNets) и его обнаружение
# Запуск: python backdoor_lab.py
import numpy as np
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier

rng = np.random.default_rng(0)
digits = load_digits()
X, y = digits.data.copy(), digits.target.copy()          # картинки 8x8 = 64 пикселя, яркость 0..16
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

TARGET = 0  # цель атакующего: любая цифра со штампом в углу -> класс "0"

def add_trigger(images):
    """Триггер: яркий квадрат 2x2 в правом нижнем углу (там у цифр обычно пусто)."""
    images = images.copy().reshape(-1, 8, 8)
    images[:, 6:8, 6:8] = 16
    return images.reshape(-1, 64)

if __name__ == "__main__":
    # 1. Атакующий подмешивает в обучающие данные 5% картинок с триггером и меткой "0"
    n_poison = int(0.05 * len(X_train))
    idx = rng.choice(len(X_train), n_poison, replace=False)
    X_train_p = np.vstack([X_train, add_trigger(X_train[idx])])
    y_train_p = np.concatenate([y_train, np.full(n_poison, TARGET)])

    # 2. Обучаем нейросеть на отравленном датасете
    model = MLPClassifier(hidden_layer_sizes=(64,), max_iter=1000, random_state=0)
    model.fit(X_train_p, y_train_p)

    # 3. На обычных тестах модель выглядит полностью здоровой
    print(f"[+] Точность на чистых тестовых данных: {model.score(X_test, y_test):.1%}")

    # 4. Но стоит добавить триггер в угол — и срабатывает бэкдор
    not_target = y_test != TARGET
    preds = model.predict(add_trigger(X_test[not_target]))
    print(f"[!] Успех бэкдора (не-нули с триггером распознаны как 0): {(preds == TARGET).mean():.1%}")

    # 5. Простейшая проверка датасета защитником: ищем аномально яркие углы
    corner = X_train_p.reshape(-1, 8, 8)[:, 6:8, 6:8].mean(axis=(1, 2))
    suspicious = np.where(corner > 12)[0]
    print(f"[🛡️] Найдено подозрительных обучающих примеров (яркий угол): {len(suspicious)} из {len(X_train_p)}")

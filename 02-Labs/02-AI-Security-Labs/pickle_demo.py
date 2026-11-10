# Лабораторная 3: Почему загрузка чужого .pkl = выполнение чужого кода (безопасная демонстрация)
# Запуск: python pickle_demo.py
import pickle

class DemoModelPayload:
    def __reduce__(self):
        # При распаковке pickle вызывает функцию, возвращённую из __reduce__.
        # Здесь безобидный print, но злоумышленник может подставить системную команду.
        return (
            print,
            ("[!] ВНИМАНИЕ: этот код выполнился в момент pickle.loads() — модель даже не запускалась!",),
        )

if __name__ == "__main__":
    raw_bytes = pickle.dumps(DemoModelPayload())
    print("[*] Загружаем сериализованный объект через pickle.loads()...")
    pickle.loads(raw_bytes)
    print("[🛡️] Вывод: для весов нейросетей всегда используй формат .safetensors или torch.load(..., weights_only=True)!")

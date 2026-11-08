import socket

def check_port(host, port):
    """
    Проверяет, открыт ли указанный TCP-порт на целевом сервере.
    """
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(5)
    
    try:
        result = sock.connect_ex((host, port))
        if result == 0:
            print(f"✅ Порт {port} на {host} ОТКРЫТ!")
        else:
            print(f"❌ Порт {port} на {host} закрыт или недоступен (код: {result})")
    except Exception as e:
        print(f"⚠️ Ошибка при подключении: {e}")
    finally:
        sock.close()

if __name__ == "__main__":
    print("🔍 Сканирование порта через сокеты TCP...")
    check_port("google.com", 80)
    check_port("google.com", 443)

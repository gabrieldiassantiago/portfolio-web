from selenium import webdriver
import time

# Configuração do driver do Chrome
options = webdriver.ChromeOptions()
options.add_argument("--disable-blink-features=AutomationControlled")
driver = webdriver.Chrome(options=options)

# URL do link de download do Google Drive
url = "https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO"

# Acessa a URL do link de download
driver.get(url)

# Espera o botão de download aparecer
while True:
    try:
        download_button = driver.find_element_by_xpath("//a[contains(@title, 'Download')]")
        break
    except:
        time.sleep(1)

# Clica no botão de download
download_button.click()

# Espera o download terminar
while True:
    time.sleep(1)
    if any([filename.endswith(".crdownload") for filename in os.listdir()]):
        continue
    else:
        break

# Abre o arquivo
arquivo = "nome_do_arquivo.extensao"
os.startfile(arquivo)

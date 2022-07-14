import pygame
from pygame.locals import *
from sys import exit
from random import randint  #Importação de numeros aleatorios

pygame.init()
#Criando a tela do game

 #Tocando a musica de fundo

barulho_colisao = pygame.mixer.Sound('C:\python\games_python\sons\explosao_inimigo.wav') 

largura = 640
altura = 480
x_cobra = largura / 2;
y_cobra = altura / 2;

x_maca = randint(40,600) #Posicao aleatoria do elemento rival em x
y_maca = randint(50,430) # ||      ||       ||   ||      ||   em y
pontos = 0
fonte = pygame.font.SysFont('arial', 40, True, True)  #Definindo o texto que aparece na tela

tela = pygame.display.set_mode((largura,altura)) #largura e altura da tela
pygame.display.set_caption('Game em python')
lista_cobra = []

def aumenta_cobra(lista_cobra):
    for XeY in lista_cobra:
        pygame.draw.rect(tela,(0,200,0), (XeY[0], XeY[1],20,20))
#loop do game, o jogo tem que estar atualizando
while True:

   tela.fill((255,255,255))

   mensagem = f'Pontos: {pontos}' #De que forma o texto estara escrito
   texto_formatado = fonte.render(mensagem, True, (210,210,210)) #mensagem em tela o texto com a cor e sem a pixelização

   for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()

        #if event.type == KEYDOWN:
             #if event.key == K_a:
               # x -= 10
             #if event.key == K_d:
               # x += 10
             #if event.key == K_w:
                # y -= 10
            # if event.key == K_s:
                 #y += 10


   if pygame.key.get_pressed()[K_a]:

       x_cobra -= 1

   if pygame.key.get_pressed()[K_d]:
       if x_cobra >= largura:
           x_cobra = 0                                   #Controle do teclado
       x_cobra += 1
   if pygame.key.get_pressed()[K_w]:
       y_cobra -= 1
   if pygame.key.get_pressed()[K_s]:
       if y_cobra >= altura:
           y_cobra = 0
       y_cobra += 1
   cobra = pygame.draw.rect(tela, (0,200,0),(x_cobra,y_cobra,20,20))
   maca = pygame.draw.rect(tela,(255,0,0),(x_maca,y_maca,20,20))

   if cobra.colliderect(maca):    #Caso ret_vermelhor se colida com ret_verde, ret_verde ira aparecer em uma posicao aleatoria
       x_maca = randint(40,600)
       y_maca = randint(50,430)
       pontos += 1
       barulho_colisao.play()


   lista_cabeca = []
   lista_cabeca.append(x_cobra)
   lista_cabeca.append(y_cobra)
   lista_cobra = [] #Receber a posicao atual da lista_cabeca
   lista_cobra.append(lista_cabeca)

   aumenta_cobra(lista_cobra)

   tela.blit(texto_formatado, (450, 40))  #Mostrar a pontuação na tela
   pygame.display.update()#atualiza o game enquanto o jogador estiver jogando
# Pendências de Informações Futuras do Projeto

Este arquivo registra as informações que necessitam de substituição por dados oficiais futuros fornecidos pelo cliente/produtor Betinho Games.

---

## 📹 Seção de Apresentação em Vídeo (`courseConfig.videoSection`)

| Item | Status | Arquivo de Configuração | Instruções de Preenchimento |
| :--- | :--- | :--- | :--- |
| **URL Oficial do Vídeo** | Pendente | `src/config/course.ts` → `videoSection.videoUrl` | Inserir a URL completa do vídeo (ex: `https://www.youtube.com/watch?v=XXXXX`). |
| **ID do Vídeo no YouTube** | Pendente | `src/config/course.ts` → `videoSection.videoId` | Inserir o ID alfanumérico do vídeo (ex: `videoId: 'XXXXX'`). Ao preencher o ID, o player mudará automaticamente do estado de "Em breve" para o player interativo. |
| **Plataforma de Hospedagem** | Definido (`youtube`) | `src/config/course.ts` → `videoSection.provider` | Opções suportadas: `'youtube'`, `'vimeo'`, `'custom'`. |
| **Thumbnail / Poster Oficial** | Opcional | `src/config/course.ts` → `videoSection.poster` | Caso queira alterar a capa padrão dark, enviar o arquivo para `public/images/video/` e atualizar a propriedade `poster`. |
| **Legendas / Transcrição** | Pendente | - | A serem ativadas diretamente nas configurações do vídeo na plataforma de hospedagem. |

---

## 🖼️ Foto Oficial do Instrutor (`courseConfig` / `InstructorSection`)

- **Foto Oficial de Betinho Games**: A imagem atual `/images/creator-betinho-games.jpg` é um asset dark institucional. Para substituir por uma foto oficial do Betinho em estúdio ou frente ao computador, basta substituir o arquivo `public/images/creator-betinho-games.jpg`.

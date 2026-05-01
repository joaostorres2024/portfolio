<template class="scroll-smooth">
  <div class="grid gap-4 p-8 min-h-screen items-stretch" style="grid-template-columns: 22% 72% 6%;">

    <div class="animar-entrada" style="position: fixed; top: 0; left: 0; width: 25%; height: 100vh; padding: 2rem; z-index: 100;">
      <div class="card" style="height: 100%;">

        <div class="photo-wrap">
          <div class="photo-placeholder">Foto</div>
        </div>

        <p class="name">João Pedro Torres</p>
        <p class="role">Desenvolvedor Fullstack</p>

        <div class="info-block">
          <a href="mailto:joao.pedrost2004@gmail.com">joao.pedrost2004@gmail.com</a>
          <span>Brasília - DF</span>
        </div>

        <div class="socials">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-soares-torres-101a532b4/">
            <div class="social-btn">
            <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkgM2EyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMnptLS41IDE1LjV2LTUuM2EzLjI2IDMuMjYgMCAwIDAtMy4yNi0zLjI2Yy0uODUgMC0xLjg0LjUyLTIuMzIgMS4zdi0xLjExaC0yLjc5djguMzdoMi43OXYtNC45M2MwLS43Ny42Mi0xLjQgMS4zOS0xLjRhMS40IDEuNCAwIDAgMSAxLjQgMS40djQuOTN6TTYuODggOC41NmExLjY4IDEuNjggMCAwIDAgMS42OC0xLjY4YzAtLjkzLS43NS0xLjY5LTEuNjgtMS42OWExLjY5IDEuNjkgMCAwIDAtMS42OSAxLjY5YzAgLjkzLjc2IDEuNjggMS42OSAxLjY4bTEuMzkgOS45NHYtOC4zN0g1LjV2OC4zN3oiLz48L3N2Zz4=" alt="LinkedIn">
          </div>
          </a>
          <a href="https://github.com/joaostorres2024">
            <div class="social-btn">
            <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkExMCAxMCAwIDAgMCAyIDEyYzAgNC40MiAyLjg3IDguMTcgNi44NCA5LjVjLjUuMDguNjYtLjIzLjY2LS41di0xLjY5Yy0yLjc3LjYtMy4zNi0xLjM0LTMuMzYtMS4zNGMtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40N2MtLjkxLS42Mi4wNy0uNi4wNy0uNmMxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzYy44NyAxLjUyIDIuMzQgMS4wNyAyLjkxLjgzYy4wOS0uNjUuMzUtMS4wOS42My0xLjM0Yy0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00LjkyYzAtMS4xMS4zOC0yIDEuMDMtMi43MWMtLjEtLjI1LS40NS0xLjI5LjEtMi42NGMwIDAgLjg0LS4yNyAyLjc1IDEuMDJjLjc5LS4yMiAxLjY1LS4zMyAyLjUtLjMzczEuNzEuMTEgMi41LjMzYzEuOTEtMS4yOSAyLjc1LTEuMDIgMi43NS0xLjAyYy41NSAxLjM1LjIgMi4zOS4xIDIuNjRjLjY1LjcxIDEuMDMgMS42IDEuMDMgMi43MWMwIDMuODItMi4zNCA0LjY2LTQuNTcgNC45MWMuMzYuMzEuNjkuOTIuNjkgMS44NVYyMWMwIC4yNy4xNi41OS42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDIiLz48L3N2Zz4=" alt="GitHub">
          </div>
          </a>
          <a href="https://www.instagram.com/joaotrrs.dev/">
            <div class="social-btn">
            <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy44IDJoOC40QzE5LjQgMiAyMiA0LjYgMjIgNy44djguNGE1LjggNS44IDAgMCAxLTUuOCA1LjhINy44QzQuNiAyMiAyIDE5LjQgMiAxNi4yVjcuOEE1LjggNS44IDAgMCAxIDcuOCAybS0uMiAyQTMuNiAzLjYgMCAwIDAgNCA3LjZ2OC44QzQgMTguMzkgNS42MSAyMCA3LjYgMjBoOC44YTMuNiAzLjYgMCAwIDAgMy42LTMuNlY3LjZDMjAgNS42MSAxOC4zOSA0IDE2LjQgNHptOS42NSAxLjVhMS4yNSAxLjI1IDAgMCAxIDEuMjUgMS4yNUExLjI1IDEuMjUgMCAwIDEgMTcuMjUgOEExLjI1IDEuMjUgMCAwIDEgMTYgNi43NWExLjI1IDEuMjUgMCAwIDEgMS4yNS0xLjI1TTEyIDdhNSA1IDAgMCAxIDUgNWE1IDUgMCAwIDEtNSA1YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNW0wIDJhMyAzIDAgMCAwLTMgM2EzIDMgMCAwIDAgMyAzYTMgMyAwIDAgMCAzLTNhMyAzIDAgMCAwLTMtMyIvPjwvc3ZnPg==" alt="Instagram">
          </div>
          </a>
          <div class="social-btn">
            <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4yOTQgNi45MjhMMTQuMzU3IDFoLTEuMkw4Ljc2MiA2LjE0N0w1LjI1IDFIMS4ybDUuMzEgNy43ODRMMS4yIDE1aDEuMmw0LjY0Mi01LjQzNkwxMC43NTEgMTVoNC4wNXpNNy42NTEgOC44NTJsLS41MzgtLjc3NUwyLjgzMiAxLjkxaDEuODQzbDMuNDU0IDQuOTc3bC41MzguNzc1bDQuNDkxIDYuNDdoLTEuODQzeiIvPjwvc3ZnPg==" alt="X">
          </div>
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Baixar Currículo
          </button>
          <button class="btn btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Enviar Mensagem
          </button>
        </div>

      </div>
    </div>

    <div></div>

    <div class="text-white px-10">
      <div class="SobreMim">
        <div class="flex flex-row items-center">
          <div class="bg-purple-700 w-3 h-3"></div>
          <p class="pl-2" style="font-weight: 700;">Sobre Mim</p>
        </div>

        <div>
          <p class="text-4xl py-8">Olá! Me chamo <span class="text-purple-700" style="font-weight: 700;">João Pedro Torres</span></p>
        </div>

        <div>
          <p class="text-7xl">Conheça mais sobre mim!</p>
        </div>

        <div>
          <p class="text-lg py-6">
            Como Desenvolvedor Full‑Stack, atuo no desenvolvimento e na manutenção de sistemas internos corporativos, criando soluções que integram front-end e back-end com eficiência e alta qualidade. Tenho experiência na prototipação e construção de interfaces utilizando Vue.js e Quasar, além da integração com APIs desenvolvidas em C#, .NET e ASP.NET.
          </p>
        </div>

        <!-- GRID SOBRE MIM -->
        <div class="grid grid-cols-3 gap-4 pt-4">
          <div class="home-card flex flex-col items-center justify-center p-6 text-center cursor-pointer">
            <p class="title-projects text-3xl">+3 Projetos</p>
            <p>Sistemas Coorporativos Reais</p>
          </div>

          <div class="home-card flex flex-col items-center justify-center p-6 text-center cursor-pointer">
            <p class="title-projects text-3xl">6 Tech's</p>
            <p>Stack moderna diversificada</p>
          </div>

          <div class="home-card flex flex-col items-center justify-center p-6 text-center cursor-pointer">
            <p class="title-projects text-3xl">
              Disponível 
              <span class="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse ml-1" style="margin-bottom: 3px;"></span>
            </p>
            <p>Aberto a novas oportunidades</p>
          </div>
        </div>
      </div>

      <hr class="my-15" style="color: rgba(255, 255, 255, 0.15);">

      <section id="projetos">
        <div class="Projetos">
        <div class="flex flex-row items-center">
          <div class="bg-purple-700 w-3 h-3"></div>
          <p class="pl-2" style="font-weight: 700;">Projetos</p>
        </div>
        <div>
          <p class="font-normal text-lg py-6">Aqui você encontra alguns dos projetos que desenvolvi, focados em soluções digitais práticas, modernas e eficientes. Cada um foi pensado para resolver problemas reais e gerar resultados.</p>
        </div>
        <div class="grid grid-cols-2 gap-6 pt-3">

          <div class="card-projects flex flex-col p-6 cursor-pointer">
            <div class="photo-projects">
              <div class="photo-placeholder">Foto</div>
            </div>
            <p class="text-3xl text-left font-bold">Coden</p>
            <p class="py-3">
              ERP moderno com integrações, criado para automatizar processos, organizar dados e facilitar a gestão empresarial.
            </p>
            <button class="btn-primary p-3 rounded-xl mt-3 text-lg font-bold">
              Ver Projeto
            </button>
          </div>

          <div class="card-projects flex flex-col p-6 cursor-pointer">
            <div class="photo-projects">
              <div class="photo-placeholder">Foto</div>
            </div>
            <p class="text-3xl text-left font-bold">ConectePubli</p>
            <p class="py-3">
              Plataforma com landing page e gerenciamento de clientes e leads, permitindo criação e organização de publicações.
            </p>
            <button class="btn-primary p-3 rounded-xl mt-3 text-lg font-bold">
              Ver Projeto
            </button>
          </div>

          <div class="card-projects flex flex-col p-6 cursor-pointer">
            <div class="photo-projects">
              <div class="photo-placeholder">Foto</div>
            </div>
            <p class="text-3xl text-left font-bold">CheckinBR</p>
            <p class="py-3">
              Este projeto está em desenvolvimento. Me acompanhe para mais novidades!
            </p>
            <button class="btn-primary p-3 rounded-xl mt-3 text-lg opacity-50 cursor-not-allowed" disabled>
              Ver Projeto
            </button>
          </div>

          <div class="card-projects flex flex-col p-6 cursor-pointer">
            <div class="photo-projects">
              <div class="photo-placeholder">Foto</div>
            </div>
            <p class="text-3xl text-left font-bold">Portal Cidadão</p>
            <p class="py-3">
              Este projeto está em desenvolvimento. Me acompanhe para mais novidades!
            </p>
            <button class="btn-primary p-3 rounded-xl mt-3 text-lg opacity-50 cursor-not-allowed" disabled>
              Ver Projeto
            </button>
          </div>

        </div>
      </div>
      </section>
      

      <hr class="my-15" style="color: rgba(255, 255, 255, 0.15);">

      <section id="StackTecnologias">
        <div class="StackTecnologias">
        <div class="flex flex-row items-center">
          <div class="bg-purple-700 w-3 h-3"></div>
          <p class="pl-2" style="font-weight: 700;">Stack & Tecnologias</p>
        </div>
        <div>
          <p class="font-normal text-lg py-6">Utilizo tecnologias modernas para desenvolver soluções eficientes, com foco em desenvolvimento web, automações e integrações através de APIs, sempre buscando performance e escalabilidade.</p>
        </div>

        <div class="flex flex-col">
            <div>
              <p class="text-2xl pb-5" style="font-weight: 700;">Front-End</p>
            </div>
          <div class="flex flex-row items-center gap-10">
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNy44MSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyMjEiPjxwYXRoIGZpbGw9IiM0MWI4ODMiIGQ9Ik0yMDQuOCAwSDI1NkwxMjggMjIwLjhMMCAwaDk3LjkyTDEyOCA1MS4yTDE1Ny40NCAweiIvPjxwYXRoIGZpbGw9IiM0MWI4ODMiIGQ9Im0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDhMNTAuNTYgMHoiLz48cGF0aCBmaWxsPSIjMzU0OTVlIiBkPSJNNTAuNTYgMEwxMjggMTMzLjEyTDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yTDk3LjkyIDB6Ii8+PC9zdmc+" alt="">
            </div>
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjZDJkMmQyIiBkPSJNMTggMTZhMiAyIDAgMSAxLTItMmEyIDIgMCAwIDEgMiAybS0yIDEwLjQyYTEwLjQgMTAuNCAwIDAgMCAyLjYxLS4zNHYtMi43MUE3LjggNy44IDAgMCAwIDIxLjA3IDIyYTkuNyA5LjcgMCAwIDAtMS40LTNhMTEuNSAxMS41IDAgMCAxLTYuMjcgNS40MXYxLjcxYTEwLjUgMTAuNSAwIDAgMCAyLjYuM205LTE1LjYyYTEwLjQgMTAuNCAwIDAgMC0xLjYtMi4wOWwtMi4zNSAxLjM2YTcuOCA3LjggMCAwIDAtMi40NS0xLjQyYTkuNiA5LjYgMCAwIDAtMS45IDIuNzFhMTEuNDggMTEuNDggMCAwIDEgNy44MiAyLjczbDEuNDgtLjg2YTEwLjMgMTAuMyAwIDAgMC0xLTIuNDNtLTE4IDBhMTAuMiAxMC4yIDAgMCAwLTEgMi40M2wyLjM1IDEuMzZhNy44IDcuOCAwIDAgMCAwIDIuODNhOS42IDkuNiAwIDAgMCAzLjI5LjI5YTExLjQ4IDExLjQ4IDAgMCAxLTEuNTUtOC4xNGwtMS41LS44NUExMC4zIDEwLjMgMCAwIDAgNyAxMC44Ii8+PHBhdGggZmlsbD0iIzAwYjRmZiIgZD0iTTI1IDIxLjIyYTEwLjIgMTAuMiAwIDAgMCAxLTIuNDNsLTIuMzQtMS4zNmE3LjggNy44IDAgMCAwIDAtMi44M2E5LjYgOS42IDAgMCAwLTMuMjktLjI5QTExLjQ4IDExLjQ4IDAgMCAxIDIyIDIyLjQ1bDEuNDguODVBMTAuMyAxMC4zIDAgMCAwIDI1IDIxLjIybS0xOCAwYTEwLjQgMTAuNCAwIDAgMCAxLjYgMi4wOWwyLjM1LTEuMzZhNy44IDcuOCAwIDAgMCAyLjQ1IDEuNDJhOS42IDkuNiAwIDAgMCAxLjktMi43MWExMS40OCAxMS40OCAwIDAgMS03LjgyLTIuNzNMNiAxOC43OGExMC4zIDEwLjMgMCAwIDAgMSAyLjQ0bTktMTUuNjNhMTAuNCAxMC40IDAgMCAwLTIuNjEuMzR2Mi43MWE3LjggNy44IDAgMCAwLTIuNDYgMS40MWE5LjcgOS43IDAgMCAwIDEuNCAzYTExLjUgMTEuNSAwIDAgMSA2LjI3LTUuNDF2LTEuN2ExMC40IDEwLjQgMCAwIDAtMi42LS4zNSIvPjxwYXRoIGZpbGw9IiMwMGI0ZmYiIGQ9Ik0xNiAzLjgxQTEyLjIgMTIuMiAwIDEgMSAzLjgxIDE2QTEyLjIyIDEyLjIyIDAgMCAxIDE2IDMuODFNMTYgMmExNCAxNCAwIDEgMCAwIDI4YTE0IDE0IDAgMCAwIDAtMjgiLz48L3N2Zz4=" alt="">
            </div>
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS45IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjU2IDE1NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdKU0I3bGQwbCIgeDE9Ii0yLjc3OCUiIHgyPSIxMDAlIiB5MT0iMzIlIiB5Mj0iNjcuNTU2JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyOThiZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBlZDdiNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjU1ZHSlNCN2xkMGwpIiBkPSJNMTI4IDBRNzYuOCAwIDY0IDUxLjJRODMuMiAyNS42IDEwOC44IDMyYzkuNzM3IDIuNDM0IDE2LjY5NyA5LjQ5OSAyNC40MDEgMTcuMzE4QzE0NS43NTEgNjIuMDU3IDE2MC4yNzUgNzYuOCAxOTIgNzYuOHE1MS4yIDAgNjQtNTEuMnEtMTkuMiAyNS42LTQ0LjggMTkuMmMtOS43MzctMi40MzQtMTYuNjk3LTkuNDk5LTI0LjQwMS0xNy4zMThDMTc0LjI0OSAxNC43NDMgMTU5LjcyNSAwIDEyOCAwTTY0IDc2LjhxLTUxLjIgMC02NCA1MS4ycTE5LjItMjUuNiA0NC44LTE5LjJjOS43MzcgMi40MzQgMTYuNjk3IDkuNDk5IDI0LjQwMSAxNy4zMThDODEuNzUxIDEzOC44NTcgOTYuMjc1IDE1My42IDEyOCAxNTMuNnE1MS4yIDAgNjQtNTEuMnEtMTkuMiAyNS42LTQ0LjggMTkuMmMtOS43MzctMi40MzQtMTYuNjk3LTkuNDk5LTI0LjQwMS0xNy4zMThDMTEwLjI0OSA5MS41NDMgOTUuNzI1IDc2LjggNjQgNzYuOCIvPjwvc3ZnPg==" alt="">
            </div>
          </div>

          <div>
              <p class="text-2xl py-5" style="font-weight: 700;">Back-End</p>
            </div>
          <div class="flex flex-row items-center gap-10">
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjNTEyYmQ0IiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQuMDUyIDE2OC45NDNxLTMuMzU1IDAtNS43MDMtMi4xOTRRMTYgMTY0LjQ5OCAxNiAxNjEuNDAycTAtMy4xNTEgMi4zNDktNS40MDNxMi4zNDgtMi4yNSA1LjcwMy0yLjI1MXEzLjQxMSAwIDUuNzYgMi4yNTFxMi40MDQgMi4yNTEgMi40MDQgNS40MDNxMCAzLjA5Ni0yLjQwNCA1LjM0N3EtMi4zNDkgMi4xOTQtNS43NiAyLjE5NG04OS40MTUtMS4yMzhIOTguOTI5bC0zOC4zMDQtNTkuMzE4YTI2LjQgMjYuNCAwIDAgMS0yLjQwNC00LjY3MmgtLjMzNnEuNDQ3IDIuNTkuNDQ3IDExLjA4N3Y1Mi45MDNINDUuNDcxVjg3SDYwLjk2bDM3LjAxOCA1Ny45MTJxMi4zNDkgMy42MDIgMy4wMiA0Ljk1M2guMjIzcS0uNTU5LTMuMjA4LS41NTktMTAuODYzVjg3aDEyLjgwNXptNjIuNjMxIDBoLTQ1LjAxNFY4N2g0My4yMjV2MTEuMzY5aC0yOS45MTZ2MjIuODQ5aDI3LjU2OHYxMS4zMTJoLTI3LjU2OHYyMy44NjNoMzEuNzA1em02My45NzMtNjkuMzM2aC0yMy4wMzh2NjkuMzM2aC0xMy4zMDlWOTguMzY5aC0yMi45ODJWODdoNTkuMzI5eiIvPjwvZz48L3N2Zz4=" alt="">
            </div>
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxwYXRoIGZpbGw9InVybCgjU1ZHZkpvNUtCSUQpIiBkPSJNNjYuOTU4LjgyNWE2LjA3IDYuMDcgMCAwIDAtNi4wMzUgMEwxMS4xMDMgMjkuNzZjLTEuODk1IDEuMDcyLTIuOTYgMy4wOTUtMi45NiA1LjI0djU3Ljk4OGMwIDIuMTQzIDEuMTgzIDQuMTY3IDIuOTU4IDUuMjRsNDkuODIgMjguOTM0YTYuMDcgNi4wNyAwIDAgMCA2LjAzNiAwbDQ5LjgyLTI4LjkzNWMxLjg5NC0xLjA3MiAyLjk1OC0zLjA5NiAyLjk1OC01LjI0VjM1YzAtMi4xNDQtMS4xODMtNC4xNjctMi45NTgtNS4yNHoiLz48cGF0aCBmaWxsPSJ1cmwoI1NWR083UjlpYm54KSIgZD0iTTExNi44OTcgMjkuNzZMNjYuODQxLjgyNUE4IDggMCAwIDAgNjUuMzAyLjIzTDkuMjEgOTYuNzk4YTYuMyA2LjMgMCAwIDAgMS42NTcgMS40M2w1MC4wNTcgMjguOTM0YzEuNDIuODMzIDMuMDc2IDEuMDcyIDQuNjE1LjU5NWw1Mi42Ni05Ni45MjVhMy43IDMuNyAwIDAgMC0xLjMwMi0xLjA3MiIvPjxwYXRoIGZpbGw9InVybCgjU1ZHWFRUdTJiM3UpIiBkPSJNMTE2Ljg5OCA5OC4yMjVjMS40Mi0uODMzIDIuNDg1LTIuMjYyIDIuOTU4LTMuODFMNjUuMDY2LjEwOGMtMS40Mi0uMjM4LTIuOTU5LS4xMTktNC4yNi43MTVMMTEuMTA0IDI5LjYzOWw1My42MDYgOTguMzU1Yy43MS0uMTIgMS41NC0uMzU4IDIuMjUtLjcxNXoiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR2ZKbzVLQklEIiB4MT0iMzQuNTEzIiB4Mj0iMjcuMTU3IiB5MT0iMTUuNTM1IiB5Mj0iMzAuNDQ4IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkuMjQyIC03My43MTUpc2NhbGUoNi4xODUyMykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM2Y4NzNmIi8+PHN0b3Agb2Zmc2V0PSIuMzMiIHN0b3AtY29sb3I9IiMzZjhiM2QiLz48c3RvcCBvZmZzZXQ9Ii42MzciIHN0b3AtY29sb3I9IiMzZTk2MzgiLz48c3RvcCBvZmZzZXQ9Ii45MzQiIHN0b3AtY29sb3I9IiMzZGE5MmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGFlMmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHTzdSOWlibngiIHgxPSIzMC4wMDkiIHgyPSI1MC41MzMiIHkxPSIyMy4zNTkiIHkyPSI4LjI4OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI5LjI0MiAtNzMuNzE1KXNjYWxlKDYuMTg1MjMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMTM4IiBzdG9wLWNvbG9yPSIjM2Y4NzNmIi8+PHN0b3Agb2Zmc2V0PSIuNDAyIiBzdG9wLWNvbG9yPSIjNTJhMDQ0Ii8+PHN0b3Agb2Zmc2V0PSIuNzEzIiBzdG9wLWNvbG9yPSIjNjRiNzQ5Ii8+PHN0b3Agb2Zmc2V0PSIuOTA4IiBzdG9wLWNvbG9yPSIjNmFiZjRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR1hUVHUyYjN1IiB4MT0iMjEuOTE3IiB4Mj0iNDAuNTU1IiB5MT0iMjIuMjYxIiB5Mj0iMjIuMjYxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkuMjQyIC03My43MTUpc2NhbGUoNi4xODUyMykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4wOTIiIHN0b3AtY29sb3I9IiM2YWJmNGIiLz48c3RvcCBvZmZzZXQ9Ii4yODciIHN0b3AtY29sb3I9IiM2NGI3NDkiLz48c3RvcCBvZmZzZXQ9Ii41OTgiIHN0b3AtY29sb3I9IiM1MmEwNDQiLz48c3RvcCBvZmZzZXQ9Ii44NjIiIHN0b3AtY29sb3I9IiMzZjg3M2YiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=" alt="">
            </div>
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik0wIDBoMjU2djI1NkgweiIvPjxwYXRoIGQ9Im02Ny4zMTIgMjEzLjkzMmwxOS41OS0xMS44NTZjMy43OCA2LjcwMSA3LjIxOCAxMi4zNzEgMTUuNDY1IDEyLjM3MWM3LjkwNSAwIDEyLjg5LTMuMDkyIDEyLjg5LTE1LjEydi04MS43OThoMjQuMDU3djgyLjEzOGMwIDI0LjkxNy0xNC42MDYgMzYuMjU5LTM1LjkxNiAzNi4yNTljLTE5LjI0NSAwLTMwLjQxNi05Ljk2Ny0zNi4wODctMjEuOTk2bTg1LjA3LTIuNTc2bDE5LjU4OC0xMS4zNDFjNS4xNTcgOC40MjEgMTEuODU5IDE0LjYwNyAyMy43MTUgMTQuNjA3YzkuOTY5IDAgMTYuMzI1LTQuOTg0IDE2LjMyNS0xMS44NThjMC04LjI0OC02LjUzLTExLjE3LTE3LjUyOC0xNS45OGwtNi4wMTMtMi41OGMtMTcuMzU3LTcuMzg3LTI4Ljg3LTE2LjY2Ny0yOC44Ny0zNi4yNTdjMC0xOC4wNDQgMTMuNzQ3LTMxLjc5MiAzNS4yMjgtMzEuNzkyYzE1LjI5NCAwIDI2LjI5MiA1LjMyOCAzNC4xOTYgMTkuMjQ3bC0xOC43MzIgMTIuMDNjLTQuMTI1LTcuMzg5LTguNTkxLTEwLjMxLTE1LjQ2NS0xMC4zMWMtNy4wNDYgMC0xMS41MTQgNC40NjgtMTEuNTE0IDEwLjMxYzAgNy4yMTcgNC40NjggMTAuMTQgMTQuNzc4IDE0LjYwOGw2LjAxNCAyLjU3N2MyMC40NSA4Ljc2NSAzMS45NjMgMTcuNyAzMS45NjMgMzcuODA0YzAgMjEuNjU0LTE3LjAxMiAzMy41MS0zOS44NjcgMzMuNTFjLTIyLjMzOSAwLTM2Ljc3NC0xMC42NTQtNDMuODE5LTI0LjU3NCIvPjwvc3ZnPg==" alt="">
            </div>
          </div>

          <div>
              <p class="text-2xl py-5" style="font-weight: 700;">Database & Devops</p>
            </div>
          <div class="flex flex-row items-center gap-10">
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHY3FKTkxkY0wiIGN4PSI5LjM2IiBjeT0iMTAuNTciIHI9IjcuMDciIGZ4PSI5LjM2IiBmeT0iMTAuNTciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNzMuMDMxMjUgMCAwIDM3LjE4NzUgMjkuNzk3IDU2LjUzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2YyZjJmMiIvPjxzdG9wIG9mZnNldD0iLjU4IiBzdG9wLWNvbG9yPSIjZWVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTZlNmU2Ii8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR3I0cnpFYmZKIiB4MT0iMi41OSIgeDI9IjE1LjQxIiB5MT0iMTAuMTYiIHkyPSIxMC4xNiIgZ3JhZGllbnRUcmFuc2Zvcm09InNjYWxlKDcuMTExMTEpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDA1YmExIi8+PHN0b3Agb2Zmc2V0PSIuMDciIHN0b3AtY29sb3I9IiMwMDYwYTkiLz48c3RvcCBvZmZzZXQ9Ii4zNiIgc3RvcC1jb2xvcj0iIzAwNzFjOCIvPjxzdG9wIG9mZnNldD0iLjUyIiBzdG9wLWNvbG9yPSIjMDA3OGQ0Ii8+PHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiMwMDc0Y2QiLz48c3RvcCBvZmZzZXQ9Ii44MiIgc3RvcC1jb2xvcj0iIzAwNmFiYiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNWJhMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjU1ZHcjRyekViZkopIiBkPSJNNjQgMzYuNTVjLTI1LjE3MiAwLTQ1LjU4Mi03LjEwOS00NS41ODItMTYuNDk1djg3Ljg5YzAgOS4wMzIgMjAuMDU1IDE2LjM1NiA0NC45NDEgMTYuNUg2NGMyNS4xNzIgMCA0NS41ODItNy4xMTMgNDUuNTgyLTE2LjV2LTg3Ljg5YzAgOS4xNzItMjAuNDEgMTYuNDk2LTQ1LjU4MiAxNi40OTZabTAgMCIvPjxwYXRoIGZpbGw9IiNlOGU4ZTgiIGQ9Ik0xMDkuNTgyIDIwLjA1NWMwIDkuMTcyLTIwLjQxIDE2LjQ5Ni00NS41ODIgMTYuNDk2cy00NS41ODItNy4xMS00NS41ODItMTYuNDk2YzAtOS4zODcgMjAuNDEtMTYuNSA0NS41ODItMTYuNXM0NS41ODIgNy4xMTMgNDUuNTgyIDE2LjUiLz48cGF0aCBmaWxsPSIjNTBlNmZmIiBkPSJNOTguOTg4IDE4LjcwM2MwIDUuODMyLTE1LjcxOCAxMC41MjQtMzQuOTg4IDEwLjUyNHMtMzQuOTg4LTQuNjkyLTM0Ljk4OC0xMC41MjRTNDQuNzMgOC4yNSA2NCA4LjI1czM0Ljk4OCA0LjY5MSAzNC45ODggMTAuNDUzIi8+PHBhdGggZmlsbD0iIzE5OGFiMyIgZD0iTTY0IDIxLjMzMmE4Mi4yIDgyLjIgMCAwIDAtMjcuNjY0IDQuMDU1QTgxLjIgODEuMiAwIDAgMCA2NCAyOS4yMjdhNzkuMyA3OS4zIDAgMCAwIDI3LjY2NC00LjEyNUE4NC4zIDg0LjMgMCAwIDAgNjQgMjEuMzMybTAgMCIvPjxwYXRoIGZpbGw9InVybCgjU1ZHY3FKTkxkY0wpIiBkPSJNOTEuNzM0IDgxLjA2NlY1Ni44OTFoLTYuNDAydjI5LjM2N2gxNy40OTZ2LTUuMTkyWk00MC45NjEgNjkuMTkxYTEzIDEzIDAgMCAxLTMuNjI5LTIuMjAzYTMuMTMgMy4xMyAwIDAgMS0uODUyLTIuMjc3YTIuNDIgMi40MiAwIDAgMSAxLjA2Ny0yLjEzM2E0Ljg1IDQuODUgMCAwIDEgMi45ODgtLjg1NWExMS41MyAxMS41MyAwIDAgMSA3LjExIDIuMDYydi02LjExM2ExOC4yIDE4LjIgMCAwIDAtNy4xMS0xLjEzN2ExMS42NyAxMS42NyAwIDAgMC03Ljc1NCAyLjQxNGE3LjY4IDcuNjggMCAwIDAtMi45ODQgNi4zMzJjMCAzLjYyNSAyLjI3MyA2LjQ2OSA3LjExIDguNjAyYzEuNTcuNjY4IDMuMDUgMS41MjcgNC40MSAyLjU2MmEyLjk4IDIuOTggMCAwIDEgMS4wNjYgMi4yNzRjMCAuODc5LS40MjYgMS42OTktMS4xMzcgMi4yMDdhNS44IDUuOCAwIDAgMS0zLjIwMy43ODFhMTEuOCAxMS44IDAgMCAxLTcuNzUtMi45ODh2Ni42MTNhMTUuNCAxNS40IDAgMCAwIDcuNjEgMS43MDdjMi45OC4xNzYgNS45MzMtLjY0OCA4LjM5LTIuMzQ4YTcuNjggNy42OCAwIDAgMCAyLjM0OC02LjQ2OGE3LjQ2IDcuNDYgMCAwIDAtMS43NzgtNC45NzdhMTcuMiAxNy4yIDAgMCAwLTUuOTAyLTQuMDU1bTM3LjI2MiAxMS4zMDVhMTYuNjMgMTYuNjMgMCAwIDAgMi4zNDctOC45NTdBMTYuNSAxNi41IDAgMCAwIDc4LjIyMyA2NGExMi44NyAxMi44NyAwIDAgMC00Ljk3Ny01LjMzMmExNC4yIDE0LjIgMCAwIDAtNy4xMTMtMS44NTJhMTUgMTUgMCAwIDAtNy42OCAxLjkyMkExMy4yIDEzLjIgMCAwIDAgNTMuMjYyIDY0YTE3LjUgMTcuNSAwIDAgMC0xLjg0OCA4LjEwNWExNi4wNiAxNi4wNiAwIDAgMCAxLjcwNyA3LjExNGExMi41MyAxMi41MyAwIDAgMCA0LjkwNiA1LjI2MWExNC43IDE0LjcgMCAwIDAgNy4xMSAyLjEzM2w2LjExNyA3LjExaDguNjA1bC04Ljc1LTcuODJhMTIuNzQgMTIuNzQgMCAwIDAgNy4xMTQtNS40MDdtLTcuMTE0LTEuNzc3YTYuNjcgNi42NyAwIDAgMS01LjQwMiAyLjQ4OGE2LjU0IDYuNTQgMCAwIDEtNS40MDYtMi41NTlhMTAuODQgMTAuODQgMCAwIDEtMi4wNjMtNy4xMDlhMTAuOSAxMC45IDAgMCAxIDIuMDYzLTcuMTEzYTcuMSA3LjEgMCAwIDEgNS41NDctMi42M2E2LjE4IDYuMTggMCAwIDEgNS4zMzYgMi42M2ExMS41MyAxMS41MyAwIDAgMSAxLjkxOCA3LjExM2ExMC4zNSAxMC4zNSAwIDAgMS0xLjk5MyA3LjE4bTAgMCIvPjwvc3ZnPg==" alt="">
            </div>
            <div class="flex flex-col items-center gap-4">
              <img class="w-20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSFltVnJiNUkiIHgxPSI2MC45MTkiIHgyPSIxOC42NjciIHkxPSI5LjYwMiIgeTI9IjEzNC40MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMTE0YThiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDY2OWJjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR1BWdG9xRjNPIiB4MT0iNzQuMTE3IiB4Mj0iNjQuMzQ0IiB5MT0iNjcuNzcyIiB5Mj0iNzEuMDc2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1vcGFjaXR5PSIwLjMiLz48c3RvcCBvZmZzZXQ9Ii4wNzEiIHN0b3Atb3BhY2l0eT0iMC4yIi8+PHN0b3Agb2Zmc2V0PSIuMzIxIiBzdG9wLW9wYWNpdHk9IjAuMSIvPjxzdG9wIG9mZnNldD0iLjYyMyIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHQjl2aXUzZGMiIHgxPSI2OC43NDIiIHgyPSIxMTUuMTIyIiB5MT0iNS45NjEiIHkyPSIxMjkuNTI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNjY2JmNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4OTJkZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjU1ZHSFltVnJiNUkpIiBkPSJNNDYuMDkuMDAyaDQwLjY4NUw0NC41NDEgMTI1LjEzN2E2LjQ4NSA2LjQ4NSAwIDAgMS02LjE0NiA0LjQxM0g2LjczM2E2LjQ4IDYuNDggMCAwIDEtNS4yNjItMi42OTlhNi40NyA2LjQ3IDAgMCAxLS44NzYtNS44NDhMMzkuOTQ0IDQuNDE0QTYuNDkgNi40OSAwIDAgMSA0Ni4wOSAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjU4NyA0LjQ2OClzY2FsZSguOTE5MDQpIi8+PHBhdGggZmlsbD0iIzAwNzhkNCIgZD0iTTk3LjI4IDgxLjYwN0gzNy45ODdhMi43NDMgMi43NDMgMCAwIDAtMS44NzQgNC43NTFsMzguMSAzNS41NjJhNiA2IDAgMCAwIDQuMDg3IDEuNjFoMzMuNTc0eiIvPjxwYXRoIGZpbGw9InVybCgjU1ZHUFZ0b3FGM08pIiBkPSJNNDYuMDkuMDAyQTYuNDMgNi40MyAwIDAgMCAzOS45MyA0LjVMLjY0NCAxMjAuODk3YTYuNDcgNi40NyAwIDAgMCA2LjEwNiA4LjY1M2gzMi40OGE2Ljk0IDYuOTQgMCAwIDAgNS4zMjgtNC41MzFsNy44MzQtMjMuMDg5bDI3Ljk4NSAyNi4xMDFhNi42MiA2LjYyIDAgMCAwIDQuMTY1IDEuNTE5aDM2LjM5NmwtMTUuOTYzLTQ1LjYxNmwtNDYuNTMzLjAxMUw4Ni45MjIuMDAyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjU4NyA0LjQ2OClzY2FsZSguOTE5MDQpIi8+PHBhdGggZmlsbD0idXJsKCNTVkdCOXZpdTNkYykiIGQ9Ik05OC4wNTUgNC40MDhBNi40OCA2LjQ4IDAgMCAwIDkxLjkxNy4wMDJINDYuNTc1YTYuNDggNi40OCAwIDAgMSA2LjEzNyA0LjQwNmwzOS4zNSAxMTYuNTk0YTYuNDc2IDYuNDc2IDAgMCAxLTYuMTM3IDguNTVoNDUuMzQ0YTYuNDggNi40OCAwIDAgMCA2LjEzNi04LjU1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjU4NyA0LjQ2OClzY2FsZSguOTE5MDQpIi8+PC9zdmc+" alt="">
            </div>
          </div>
        </div>
      </div>
      </section>

      <hr class="my-15" style="color: rgba(255, 255, 255, 0.15);">

      <section id="Experiencia">
        <div class="Experiencia">
        <div class="flex flex-row items-center">
          <div class="bg-purple-700 w-3 h-3"></div>
          <p class="pl-2" style="font-weight: 700;">Experiência</p>
        </div>
        </div>
      </section>

    </div>

    <div class="text-white pr-8">
  <div class="flex flex-col gap-0 p-2 items-center card-menu animar-entrada-esq"
       id="navTrack"
       style="position: fixed; right: 1.5rem; transform: translateY(-50%); z-index: 100;">

    <div class="nav-dot" id="navDot"></div>

    <div class="nav-item" data-section="SobreMim" data-label="Sobre Mim" onclick="goTo('SobreMim')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMzQuMzggMjEwYTEyMy4zNiAxMjMuMzYgMCAwIDAtNjAuNzgtNTMuMjNhNzYgNzYgMCAxIDAtOTEuMiAwQTEyMy4zNiAxMjMuMzYgMCAwIDAgMjEuNjIgMjEwYTEyIDEyIDAgMSAwIDIwLjc3IDEyYzE4LjEyLTMxLjMyIDUwLjEyLTUwIDg1LjYxLTUwczY3LjQ5IDE4LjY5IDg1LjYxIDUwYTEyIDEyIDAgMCAwIDIwLjc3LTEyTTc2IDk2YTUyIDUyIDAgMSAxIDUyIDUyYTUyLjA2IDUyLjA2IDAgMCAxLTUyLTUyIi8+PC9zdmc+" alt="">
    </div>

    <div class="nav-item" data-section="Projetos" data-label="Projetos" onclick="goTo('Projetos')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjYiIHI9IjEiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNiAxN2gxMnYySDZ6bTQtNS4xN2wyLjc5MiAyLjc5NGwzLjkzMi0zLjkzNUwxOCAxMlY4aC00bDEuMzEgMS4yNzVsLTIuNTE5IDIuNTE5TDEwIDlsLTQgNGwxLjQxNCAxLjQxNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkgM2gtMy4yOThhNSA1IDAgMCAwLS4zMi0uNDI1bC0uMDEtLjAxMmE0LjQzIDQuNDMgMCAwIDAtMi44OS0xLjUxOGEyLjYgMi42IDAgMCAwLS45NjQgMGE0LjQzIDQuNDMgMCAwIDAtMi44OSAxLjUxOGwtLjAxLjAxMmE1IDUgMCAwIDAtLjMyLjQyNFYzSDVhMy4wMDMgMy4wMDMgMCAwIDAtMyAzdjE0YTMuMDAzIDMuMDAzIDAgMCAwIDMgM2gxNGEzLjAwMyAzLjAwMyAwIDAgMCAzLTNWNmEzLjAwMyAzLjAwMyAwIDAgMC0zLTNtMSAxN2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMVY2YTEgMSAwIDAgMSAxLTFoNC41NWEyLjUgMi41IDAgMCAxIDQuOSAwSDE5YTEgMSAwIDAgMSAxIDFaIi8+PC9zdmc+" alt="">
    </div>

    <div class="nav-item" data-section="StackTecnologias" data-label="Stack & Techs" onclick="goTo('StackTecnologias')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgMTBjLS43NCAwLTEuMzguNC0xLjcyIDFIMTNWOWg0Yy41NSAwIDEtLjQ1IDEtMVY1LjcyYy42LS4zNSAxLS45OCAxLTEuNzJjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyYzAgLjc0LjQgMS4zOCAxIDEuNzJWN2gtM1Y1YzAtMS42NS0xLjM1LTMtMy0zYy0xLjMgMC0yLjQxLjgzLTIuODMgMi4wMUEzLjUxIDMuNTEgMCAwIDAgNCA3LjVjMCAuMzMuMDUuNjUuMTQuOTZDMi44NyA5LjE0IDIgMTAuNDkgMiAxMmMwIDEuMDguNDMgMi4wOSAxLjE3IDIuODNjLS4xMS4zOC0uMTcuNzctLjE3IDEuMTdjMCAxLjk2IDEuNDEgMy41OSAzLjMxIDMuOTNDNi44NiAyMS4xNiA4LjExIDIyIDkuNSAyMmMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVYxN2gzdjEuMjhjLS42LjM1LTEgLjk4LTEgMS43MmMwIDEuMS45IDIgMiAyczItLjkgMi0yYzAtLjc0LS40LTEuMzgtMS0xLjcyVjE2YzAtLjU1LS40NS0xLTEtMWgtNHYtMmg1LjI4Yy4zNS42Ljk4IDEgMS43MiAxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMm0tOSA4LjVjMCAuODMtLjY3IDEuNS0xLjUgMS41Yy0uNzEgMC0xLjMzLS41LTEuNDctMS4ybC0uMjEtLjhIN2MtMS4xIDAtMi0uOS0yLTJjMC0uMzUuMDgtLjY4LjI1LS45OGwuNDYtLjgybC0uNzgtLjUxQzQuMzUgMTMuMzEgNCAxMi42OCA0IDEyYzAtLjk4LjcyLTEuODIgMS42OC0xLjk3bDEuNjktLjI2bC0xLjA2LTEuMzVjLS4yLS4yNi0uMzItLjU5LS4zMi0uOTJjMC0uODMuNjctMS41IDEuNS0xLjVjLjExIDAgLjIxLjAxLjMxLjAzbDEuMTkuMTdWNC45OWMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2MTMuNVoiLz48L3N2Zz4=" alt="">
    </div>

    <div class="nav-item" data-section="Experiencia" data-label="Experiência" onclick="goTo('Projetos')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NVY0SDNhMiAyIDAgMCAwLTIgMnY3YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJoLTEuMjVWMi43NUExLjc1IDEuNzUgMCAwIDAgMTAgMXptNC4yNSAzVjIuNzVBLjI1LjI1IDAgMCAwIDEwIDIuNUg2YS4yNS4yNSAwIDAgMC0uMjUuMjVWNHpNMyA1LjVoMTBhLjUuNSAwIDAgMSAuNS41djFoLTExVjZhLjUuNSAwIDAgMSAuNS0uNW0tLjUgM1YxM2EuNS41IDAgMCAwIC41LjVoMTBhLjUuNSAwIDAgMCAuNS0uNVY4LjVIOVYxMEg3VjguNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="">
    </div>

    <div class="nav-item" data-section="StackTecnologias" data-label="Serviços" onclick="goTo('StackTecnologias')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC44IDEwLjk1bDIuMTUtMi4xNzVsLTEuNC0xLjQyNWwtLjQuNHEtLjI3NS4yNzUtLjY4Ny4yODhUNy43NSA3Ljc1dC0uMy0uNzEydC4zLS43MTNsLjM3NS0uMzc1TDcgNC44MjVMNC44MjUgN3ptOC4yIDguMjI1TDE5LjE3NSAxN2wtMS4xMjUtMS4xMjVsLS40LjM3NXEtLjMuMy0uNy4zdC0uNy0uMy0uMy0uN3QuMy0uN2wuMzc1LS40bC0xLjQyNS0xLjRsLTIuMTUgMi4xNXpNMTcuNiA1bDEuNDI1IDEuNDI1ek00IDIxcS0uNDI1IDAtLjcxMi0uMjg4VDMgMjB2LTIuODI1cTAtLjIuMDc1LS4zODd0LjIyNS0uMzM4bDQuMDc1LTQuMDc1TDMuMDUgOC4wNVEyLjYyNSA3LjYyNSAyLjYyNSA3dC40MjUtMS4wNWwyLjktMi45cS40MjUtLjQyNSAxLjA1LS40MTJ0MS4wNS40MzdMMTIuNCA3LjRsMy43NzUtMy44cS4zLS4zLjY3NS0uNDV0Ljc3NS0uMTV0Ljc3NS4xNXQuNjc1LjQ1TDIwLjQgNC45NXEuMy4zLjQ1LjY3NVQyMSA2LjR0LS4xNS43NjN0LS40NS42NjJsLTMuNzc1IDMuOGw0LjMyNSA0LjMyNXEuNDI1LjQyNS40MjUgMS4wNXQtLjQyNSAxLjA1bC0yLjkgMi45cS0uNDI1LjQyNS0xLjA1LjQyNXQtMS4wNS0uNDI1bC00LjMyNS00LjMyNUw3LjU1IDIwLjdxLS4xNS4xNS0uMzM3LjIyNVQ2LjgyNSAyMXoiLz48L3N2Zz4=" alt="">
    </div>

    <div class="nav-item" data-section="SobreMim" data-label="Contato" onclick="goTo('SobreMim')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCAyMHEtLjgyNSAwLTEuNDEyLS41ODdUMiAxOFY2cTAtLjgyNS41ODgtMS40MTJUNCA0aDE2cS44MjUgMCAxLjQxMy41ODhUMjIgNnYxMnEwIC44MjUtLjU4NyAxLjQxM1QyMCAyMHptOC03TDQgOHYxMGgxNlY4em0wLTJsOC01SDR6TTQgOFY2djEyeiIvPjwvc3ZnPg==" alt="">
    </div>

    <div class="nav-item" data-section="SobreMim" data-label="Idiomas" onclick="goTo('SobreMim')">
      <img class="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTEuOSAyMmw0LjU1LTEyaDIuMWw0LjU1IDEySDIxbC0xLjA3NS0zLjA1aC00Ljg1TDE0IDIyek00IDE5bC0xLjQtMS40bDUuMDUtNS4wNXEtLjg3NS0uODc1LTEuNTg4LTJUNC43NSA4aDIuMXEuNSA5NzUgMSAxLjd0MS4yIDEuNDVxLjgyNS0uODI1IDEuNzEzLTIuMzEzVDEyLjEgNkgxVjRoN1YyaDJ2Mmg3djJoLTIuOXEtLjUyNSAxLjgtMS41NzUgMy43dC0yLjA3NSAyLjlsMi40IDIuNDVsLS43NSAyLjA1bC0zLjA1LTMuMTI1em0xMS43LTEuOGgzLjZsLTEuOC01LjF6Ii8+PC9zdmc+" alt="">
    </div>

  </div>
</div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    0 0 0 1px rgba(107, 0, 226, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}

.home-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    0 0 0 1px rgba(107, 0, 226, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}

.card-menu {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    0 0 0 1px rgba(107, 0, 226, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}

.card-projects {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    0 0 0 1px rgba(107, 0, 226, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}

.home-card:hover{
  background: rgba(255, 255, 255, 0.07);
  transition: all 0.5s;
  transform: translateY(-5px);
}

.home-card:not(:hover){
  transition: all 0.5s;
  transform: translateY(0px);
}

.photo-wrap {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-projects {
  width: 100%;
  aspect-ratio: 3/2;
  border-radius: 16px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-placeholder {
  color: rgba(255, 255, 255, 0.15);
  font-size: 13px;
  letter-spacing: 0.08em;
  font-family: 'DM Sans', sans-serif;
}

.title-projects{
  font-weight: 700;
}

.name {
  font-family: 'Syne', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
}

.role {
  font-family: 'DM Sans', monospace;
  font-size: 0.78rem;
  color: #9b30ff;
  letter-spacing: 0.06em;
  margin-top: 4px;
  font-weight: 500;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin: 14px 0;
}

.info-block a {
  color: #fff;
  font-size: 0.96rem;
  text-decoration: underline;
  text-decoration-color: #6B00E2;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.info-block a:hover {
  color: #c084fc;
}

.info-block span {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.76rem;
}

.socials {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.social-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.social-btn:hover {
  background: rgba(107, 0, 226, 0.25);
  border-color: rgba(107, 0, 226, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 0, 226, 0.2);
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: auto;
}

.btn {
  width: 100%;
  padding: 11px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: #fff;
  backdrop-filter: blur(10px);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.10);
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #6B00E2, #9b30ff);
  color: #fff;
  box-shadow: 0 4px 20px rgba(107, 0, 226, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(107, 0, 226, 0.5);
}

.nav-item {
  position: relative;
  width: 42px; height: 42px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.2s;
  z-index: 2;
}
.nav-item:hover { background: rgba(255,255,255,0.08); }
.nav-item img { opacity: 0.45; transition: opacity 0.3s; }
.nav-item.active img { opacity: 1; }

.nav-item::before {
  content: attr(data-label);
  position: absolute;
  right: calc(100% + 12px);
  background: rgba(107,0,226,0.9);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.2s, transform 0.2s;
}
.nav-item:hover::before { opacity: 1; transform: translateX(0); }

.nav-dot {
  position: absolute;
  left: 50%;
  width: 36px; height: 36px;
  transform: translateX(-50%);
  border-radius: 10px;
  background: linear-gradient(135deg, #6B00E2, #9b30ff);
  box-shadow: 0 0 16px rgba(107,0,226,0.6), 0 0 32px rgba(107,0,226,0.3);
  transition: top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
  pointer-events: none;
}
.nav-dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 14px;
  border: 1.5px solid rgba(155,48,255,0.5);
  animation: dotPulse 2s ease-in-out infinite;
}
@keyframes dotPulse {
  0%,100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.12); }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-400px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(400px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animar-entrada {
  animation: slideInLeft 2s cubic-bezier(.22, 1, .36, 1) forwards;
}

.animar-entrada-esq {
  animation: slideInRight 2s cubic-bezier(.22, 1, .36, 1) forwards;
}
</style>

<script lang="ts">
const NAV_SECTIONS = ['SobreMim', 'Projetos', 'StackTecnologias', 'Experiencia'];
const navItems = document.querySelectorAll('.nav-item');
const dot      = document.getElementById('navDot');
const track    = document.getElementById('navTrack');

function getDotTop(item) {
  const tRect = track.getBoundingClientRect();
  const iRect = item.getBoundingClientRect();
  return iRect.top - tRect.top + iRect.height / 2 - dot.offsetHeight / 2;
}

function moveDot(index) {
  navItems.forEach((el, i) => el.classList.toggle('active', i === index));
  dot.style.top = getDotTop(navItems[index]) + 'px';
}

function goTo(id) {
  const el = document.querySelector('.' + id) || document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getActiveIndex() {
  const scrollMid = window.scrollY + window.innerHeight * 0.4;
  let best = 0;
  for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
    const el = document.querySelector('.' + NAV_SECTIONS[i]);
    if (!el) continue;
    if (scrollMid >= el.getBoundingClientRect().top + window.scrollY) { best = i; break; }
  }
  return best;
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { moveDot(getActiveIndex()); ticking = false; });
    ticking = true;
  }
});
window.addEventListener('load',   () => moveDot(0));
window.addEventListener('resize', () => moveDot(getActiveIndex()));

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};
</script>
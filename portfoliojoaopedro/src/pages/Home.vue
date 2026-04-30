<template>
  <div class="grid gap-4 p-8 min-h-screen items-stretch" style="grid-template-columns: 22% 73% 5%; background-color: #101110;">

    <!-- Card Apresentação -->
    <div class="relative h-full">

      <div class="absolute inset-0 rounded-xl blur-2xl opacity-50" style="background: radial-gradient(ellipse at top left, #6B00E2 0%, #1B1B1B 45%, #1B1B1B 55%, #6B00E2 100%)"></div>

      <!-- Card -->
      <div class="relative flex flex-col items-center text-center p-6 rounded-xl h-full" style="background: radial-gradient(ellipse at top left, #6B00E2 0%, #1B1B1B 45%, #1B1B1B 55%, #6B00E2 100%)">

        <!-- Foto -->
        <div class="bg-white rounded-xl w-full mb-5" style="aspect-ratio: 1/1;">
        </div>

        <!-- Nome e cargo -->
        <p class="text-2xl text-white font-bold">João Pedro Torres</p>
        <p class="roxo-texto text-md font-mono">Desenvolvedor Fullstack</p>

        <!-- Email e cidade -->
        <div class="py-5 flex flex-col gap-1">
          <a href="mailto:joao.pedrost2004@gmail.com" class="text-white text-md underline decoration-purple-700 hover:text-purple-300 transition-colors">
            joao.pedrost2004@gmail.com
          </a>
          <p class="text-gray-400 text-md">Brasília - DF</p>
        </div>

        <!-- Ícones sociais -->
        <div class="flex flex-row gap-2 mb-6">
          <div class="flex items-center justify-center rounded-lg w-12 h-12 cursor-pointer transition-colors" style="background-color: #101110;">
            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkgM2EyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMnptLS41IDE1LjV2LTUuM2EzLjI2IDMuMjYgMCAwIDAtMy4yNi0zLjI2Yy0uODUgMC0xLjg0LjUyLTIuMzIgMS4zdi0xLjExaC0yLjc5djguMzdoMi43OXYtNC45M2MwLS43Ny42Mi0xLjQgMS4zOS0xLjRhMS40IDEuNCAwIDAgMSAxLjQgMS40djQuOTN6TTYuODggOC41NmExLjY4IDEuNjggMCAwIDAgMS42OC0xLjY4YzAtLjkzLS43NS0xLjY5LTEuNjgtMS42OWExLjY5IDEuNjkgMCAwIDAtMS42OSAxLjY5YzAgLjkzLjc2IDEuNjggMS42OSAxLjY4bTEuMzkgOS45NHYtOC4zN0g1LjV2OC4zN3oiLz48L3N2Zz4=" alt="LinkedIn">
          </div>
          <div class="flex items-center justify-center rounded-lg w-12 h-12 cursor-pointer transition-colors" style="background-color: #101110;">
            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkExMCAxMCAwIDAgMCAyIDEyYzAgNC40MiAyLjg3IDguMTcgNi44NCA5LjVjLjUuMDguNjYtLjIzLjY2LS41di0xLjY5Yy0yLjc3LjYtMy4zNi0xLjM0LTMuMzYtMS4zNGMtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40N2MtLjkxLS42Mi4wNy0uNi4wNy0uNmMxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzYy44NyAxLjUyIDIuMzQgMS4wNyAyLjkxLjgzYy4wOS0uNjUuMzUtMS4wOS42My0xLjM0Yy0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00LjkyYzAtMS4xMS4zOC0yIDEuMDMtMi43MWMtLjEtLjI1LS40NS0xLjI5LjEtMi42NGMwIDAgLjg0LS4yNyAyLjc1IDEuMDJjLjc5LS4yMiAxLjY1LS4zMyAyLjUtLjMzczEuNzEuMTEgMi41LjMzYzEuOTEtMS4yOSAyLjc1LTEuMDIgMi43NS0xLjAyYy41NSAxLjM1LjIgMi4zOS4xIDIuNjRjLjY1LjcxIDEuMDMgMS42IDEuMDMgMi43MWMwIDMuODItMi4zNCA0LjY2LTQuNTcgNC45MWMuMzYuMzEuNjkuOTIuNjkgMS44NVYyMWMwIC4yNy4xNi41OS42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDIiLz48L3N2Zz4=" alt="GitHub">
          </div>
          <div class="flex items-center justify-center rounded-lg w-12 h-12 cursor-pointer transition-colors" style="background-color: #101110;">
            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy44IDJoOC40QzE5LjQgMiAyMiA0LjYgMjIgNy44djguNGE1LjggNS44IDAgMCAxLTUuOCA1LjhINy44QzQuNiAyMiAyIDE5LjQgMiAxNi4yVjcuOEE1LjggNS44IDAgMCAxIDcuOCAybS0uMiAyQTMuNiAzLjYgMCAwIDAgNCA3LjZ2OC44QzQgMTguMzkgNS42MSAyMCA3LjYgMjBoOC44YTMuNiAzLjYgMCAwIDAgMy42LTMuNlY3LjZDMjAgNS42MSAxOC4zOSA0IDE2LjQgNHptOS42NSAxLjVhMS4yNSAxLjI1IDAgMCAxIDEuMjUgMS4yNUExLjI1IDEuMjUgMCAwIDEgMTcuMjUgOEExLjI1IDEuMjUgMCAwIDEgMTYgNi43NWExLjI1IDEuMjUgMCAwIDEgMS4yNS0xLjI1TTEyIDdhNSA1IDAgMCAxIDUgNWE1IDUgMCAwIDEtNSA1YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNW0wIDJhMyAzIDAgMCAwLTMgM2EzIDMgMCAwIDAgMyAzYTMgMyAwIDAgMCAzLTNhMyAzIDAgMCAwLTMtMyIvPjwvc3ZnPg==" alt="Instagram">
          </div>
          <div class="flex items-center justify-center rounded-lg w-12 h-12 cursor-pointer transition-colors" style="background-color: #101110;">
            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4yOTQgNi45MjhMMTQuMzU3IDFoLTEuMkw4Ljc2MiA2LjE0N0w1LjI1IDFIMS4ybDUuMzEgNy43ODRMMS4yIDE1aDEuMmw0LjY0Mi01LjQzNkwxMC43NTEgMTVoNC4wNXpNNy42NTEgOC44NTJsLS41MzgtLjc3NUwyLjgzMiAxLjkxaDEuODQzbDMuNDU0IDQuOTc3bC41MzguNzc1bDQuNDkxIDYuNDdoLTEuODQzeiIvPjwvc3ZnPg==" alt="X">
          </div>
        </div>

        <!-- Botões -->
        <div class="flex flex-col gap-3 w-full mt-auto">
          <button class="flex items-center justify-center gap-2 w-full py-3 rounded-xl cursor-pointer text-white text-md font-medium transition-all hover:opacity-80" style="background-color: #101110;">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Baixar Currículo
          </button>
          <button class="flex items-center justify-center gap-2 w-full py-3 rounded-xl cursor-pointer text-white text-md font-medium transition-all hover:opacity-80" style="background-color: #6B00E2;">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Enviar Mensagem
          </button>
        </div>

      </div>
    </div>

    <!-- View -->
    <div class="text-white">
      View
    </div>

    <!-- Menu -->
    <div class="text-white">
      Menu
    </div>

  </div>
</template>

<style>
.roxo-texto {
  color: #6B00E2;
}
</style>
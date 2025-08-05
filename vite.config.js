import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  base: "./", // Usa rutas relativas en los enlaces generados en el HTML
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        curso_ciberseguridad: resolve(__dirname, 'cursos/curso_ciberseguridad.html'),
        curso_fullstack: resolve(__dirname, 'cursos/curso_fullstack.html'),
        curso_ia: resolve(__dirname, 'cursos/curso_ia.html'),
        noticia1: resolve(__dirname, 'noticias/noticia1.html'),
        noticia2: resolve(__dirname, 'noticias/noticia2.html'),
        aviso_legal: resolve(__dirname, 'aviso_legal.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        login: resolve(__dirname, 'login.html'),
        registro: resolve(__dirname, 'registro.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        blog: resolve(__dirname, 'blog.html'),
        '404': resolve(__dirname, '404.html')
      }
    }
  }
});

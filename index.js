const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Modern Landing Page</title>

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #0f172a;
          color: #fff;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          z-index: -1;
        }

        body::after {
          content: "";
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%);
          bottom: -200px;
          right: -200px;
          z-index: -1;
        }

        header {
          width: 100%;
          padding: 24px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          backdrop-filter: blur(10px);
          background: rgba(15, 23, 42, 0.5);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        nav a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          margin-left: 28px;
          transition: 0.3s;
          font-weight: 500;
        }

        nav a:hover {
          color: #fff;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 8% 80px;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          align-items: center;
          gap: 60px;
        }

        .text h1 {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
        }

        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text p {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          color: #fff;
          box-shadow: 0 10px 30px rgba(59,130,246,0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59,130,246,0.45);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .stat-box {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 18px;
          text-align: center;
        }

        .stat-box h2 {
          font-size: 2rem;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .stat-box span {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }

        footer {
          text-align: center;
          padding: 30px;
          color: rgba(255,255,255,0.5);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        @media(max-width: 768px) {
          .text h1 {
            font-size: 3rem;
          }

          nav {
            display: none;
          }

          .stats {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>

    <body>

      <header>
        <div class="logo">NovaTech</div>

        <nav>
          <a href="#">Início</a>
          <a href="#">Recursos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-content">

          <div class="text">
            <h1>
             .Net > Node.Js
            </h1>

            <div class="buttons">
              <a href="#" class="btn btn-primary">Começar Agora</a>
              <a href="#" class="btn btn-secondary">Ver Demonstração</a>
            </div>
          </div>

          <div class="card">
            <h2 style="margin-bottom:20px; font-size:2rem;">
              🚀 Performance & Design
            </h2>

            <p style="color: rgba(255,255,255,0.7); line-height:1.8;">
              Layout inspirado nas tendências atuais de UI/UX com efeitos
              glassmorphism, gradientes modernos, responsividade completa
              e visual premium.
            </p>

            <div class="stats">
              <div class="stat-box">
                <h2>99%</h2>
                <span>Performance</span>
              </div>

              <div class="stat-box">
                <h2>24/7</h2>
                <span>Suporte</span>
              </div>

              <div class="stat-box">
                <h2>+10k</h2>
                <span>Usuários</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer>
        © 2026 Esuda — Todos os direitos reservados.
      </footer>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
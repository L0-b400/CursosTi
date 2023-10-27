//navbar
fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                // Insira o conteúdo da barra de navegação no elemento com o ID "navbar-container"
                document.getElementById('nav0').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar a barra de navegação:', error));
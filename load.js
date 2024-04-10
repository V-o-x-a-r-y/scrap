document.addEventListener('DOMContentLoaded', function() {
            // Créer une requête HTTP
            var xhr = new XMLHttpRequest();
            
            // Charger le fichier HTML souhaité
            xhr.open('GET', 'https://raw.githubusercontent.com/V-o-x-a-r-y/scrap/main/popup.html', true);
            
            // Quand la requête est terminée
            xhr.onreadystatechange = function() {
                // Vérifier si la requête est terminée et le statut de la requête
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Créer un élément div pour contenir le contenu du fichier HTML
                    var container = document.createElement('div');
                    
                    // Insérer le contenu du fichier HTML dans le div créé
                    container.innerHTML = xhr.responseText;
                    
                    // Ajouter le contenu au corps de la page
                    document.body.appendChild(container);
                }
            };
            
            // Envoyer la requête
            xhr.send();
});
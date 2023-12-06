// Importez les fonctions de votre contrôleur
const userController = require('../controllers/user');

// Exemple : Créer un utilisateur
async function createUser(email, password) {
    try {
        await userController.signup({
            body: {
                email: email,
                password: password
            }
        }, {
            status: (code) => ({ json: (data) => console.log(`Status Code: ${code}`, data) })
        });
        console.log('Utilisateur créé avec succès!');
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error.message);
    }
}

// Exemple : Modifier un utilisateur
async function modifyUser(userId, email, password, role) {
    try {
        await userController.modifyUser({
            params: {
                id: userId
            },
            body: {
                email: email,
                password: password,
                role: role
            }
        }, {
            status: (code) => ({ json: (data) => console.log(`Status Code: ${code}`, data) })
        });
        console.log('Utilisateur modifié avec succès!');
    } catch (error) {
        console.error('Erreur lors de la modification de l\'utilisateur:', error.message);
    }
}

// Exemple : Obtenir tous les utilisateurs
async function getAllUsers() {
    try {
        await userController.getAllUser({}, {
            status: (code) => ({ json: (data) => console.log(`Status Code: ${code}`, data) })
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error.message);
    }
}

// Utilisation des fonctions
createUser('nouvel_utilisateur@email.com', 'mot_de_passe');
modifyUser('ID_de_l_utilisateur', 'nouvel_email@email.com', 'nouveau_mot_de_passe', 'nouveau_role');
getAllUsers();
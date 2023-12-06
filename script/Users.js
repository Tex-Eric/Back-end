const axios = require('axios');

// Remplacez ces valeurs par celles de votre environnement
const apiUrl = 'http://localhost:3000/api/auth'; // Remplacez par l'URL de votre serveur
const adminToken = 'votre_token_admin'; // Remplacez par le token admin

async function createUser(email, password) {
    try {
        const response = await axios.post(`${apiUrl}/signup`, { email, password });
        console.log(response.data);
    } catch (error) {
        console.error(error.response.data);
    }
}

createUser('caro@email.com', 'password');


/* const userController = require('../controllers/user');

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

async function getUser(email, password) {
    try {
        await userController.login({
            body: {
                email: email,
                password: password
            }
        }, {
            status: (code) => ({ json: (data) => console.log(`Status Code: ${code}`, data) })
        });
        console.log('Utilisateur trouver avec succès!');
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error.message);
    }
}

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

createUser('caro@email.com', 'password');
createUser('drago.fly@email.com', 'password');
const userAdmin = getUser('caro@email.com', 'password')
modifyUser(userAdmin.userId, 'caro@email.com', 'password', 'admin');

async function executeFunctions() {
    await createUser('caro.king@email.com', 'password');
    await new Promise(resolve => setTimeout(resolve, 11000)); 
    await createUser('drago.fly@email.com', 'password');
    await new Promise(resolve => setTimeout(resolve, 11000)); 
    const userAdmin = await getUser('caro@email.com', 'password');
    await new Promise(resolve => setTimeout(resolve, 11000)); 
    if (userAdmin) {
        await modifyUser(userAdmin.userId, 'caro@email.com', 'password', 'admin');
    }
}

executeFunctions();
 */
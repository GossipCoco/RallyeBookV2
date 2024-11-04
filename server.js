const Config = {};

if (typeof window !== 'undefined') {
    const hostname = 'http://192.168.1.14';
    const port = '4049'; // Assurez-vous que c'est le port sur lequel votre back-end écoute
    Config.Url = `${hostname}:${port}`;
  } else {
    // Si vous exécutez du code côté serveur (Node.js), vous pouvez définir une URL par défaut ou utiliser l'adresse IP du serveur
    Config.Url = 'http://192.168.1.14:4049';
  }
  
  Config.secret = 'gossip-coco-key';
  module.exports = Config;
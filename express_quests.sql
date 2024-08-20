-- Supprimer les tables existantes si elles existent
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS users;

-- Créer la table des films
CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  year VARCHAR(4) NOT NULL,
  color BOOLEAN NOT NULL,
  duration INTEGER NOT NULL
);

-- Insérer des données dans la table des films
INSERT INTO movies (id, title, director, year, color, duration) VALUES
(1, 'Citizen Kane', 'Orson Wells', '1941', 0, 120),
(2, 'The Godfather', 'Francis Ford Coppola', '1972', 1, 180),
(3, 'Pulp Fiction', 'Quentin Tarantino', '1994', 1, 180),
(4, 'Apocalypse Now', 'Francis Ford Coppola', '1979', 1, 150),
(5, '2001: A Space Odyssey', 'Stanley Kubrick', '1968', 1, 160),
(6, 'The Dark Knight', 'Christopher Nolan', '2008', 1, 150);

-- Créer la table des utilisateurs
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  city VARCHAR(255),
  language VARCHAR(255)
);

-- Insérer des données dans la table des utilisateurs
INSERT INTO users (id, firstname, lastname, email, city, language) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'Paris', 'English'),
(2, 'Valeriy', 'Appius', 'valeriy.appius@example.com', 'Moscow', 'Russian'),
(3, 'Ralf', 'Geronimo', 'ralf.geronimo@example.com', 'New York', 'Italian'),
(4, 'Maria', 'Iskandar', 'maria.iskandar@example.com', 'New York', 'German'),
(5, 'Jane', 'Doe', 'jane.doe@example.com', 'London', 'English'),
(6, 'Johanna', 'Martino', 'johanna.martino@example.com', 'Milan', 'Spanish');

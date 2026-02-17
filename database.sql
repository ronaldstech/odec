CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
);

CREATE TABLE `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL, -- 'Impact Story', 'Newsletter', 'News'
  `author` varchar(100),
  `date` date NOT NULL,
  `image_url` varchar(255),
  `excerpt` text,
  `content` longtext,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `year` int(4) NOT NULL,
  `file_url` varchar(255) NOT NULL, -- PDF path
  `thumbnail_url` varchar(255),
  `description` text,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `story_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `story_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_story` FOREIGN KEY (`story_id`) REFERENCES `stories` (`id`) ON DELETE CASCADE
);

-- Default admin user (password: admin123)
-- Hash: $2y$10$fM6GXRXAS5Qwjx3Vza7ip.qA/dBHu33V0Yb//GpWsDV74GxtzaP7O
INSERT INTO `admins` (`username`, `password`) VALUES ('admin', '$2y$10$fM6GXRXAS5Qwjx3Vza7ip.qA/dBHu33V0Yb//GpWsDV74GxtzaP7O');

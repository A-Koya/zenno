CREATE TABLE IF NOT EXISTS "users"(
    id VARCHAR(36) PRIMARY KEY NOT NULL UNIQUE,
    user_name VARCHAR(16) NOT NULL,
    user_password VARCHAR(16) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_deleted BOOLEAN NOT NULL
);

INSERT INTO users (id, user_name, user_password, image_url, is_deleted) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174000', 'Alice', 'password123', 'https://via.placeholder.com/150', false),
    ('223e4567-e89b-12d3-a456-426614174001', 'Bob', 'password456', 'https://via.placeholder.com/150', false),
    ('323e4567-e89b-12d3-a456-426614174002', 'Charlie', 'password789', 'https://via.placeholder.com/150', false),
    ('423e4567-e89b-12d3-a456-426614174003', 'David', 'passwordabc', 'https://via.placeholder.com/150', false),
    ('523e4567-e89b-12d3-a456-426614174004', 'Eve', 'passworddef', 'https://via.placeholder.com/150', false),
    ('623e4567-e89b-12d3-a456-426614174005', 'Frank', 'passwordghi', 'https://via.placeholder.com/150', false),
    ('723e4567-e89b-12d3-a456-426614174006', 'Grace', 'passwordjkl', 'https://via.placeholder.com/150', false),
    ('823e4567-e89b-12d3-a456-426614174007', 'Harry', 'passwordmno', 'https://via.placeholder.com/150', false),
    ('923e4567-e89b-12d3-a456-426614174008', 'Ivy', 'passwordpqr', 'https://via.placeholder.com/150', false),
    ('a23e4567-e89b-12d3-a456-426614174009', 'Jack', 'passwordstu', 'https://via.placeholder.com/150', false);



CREATE TABLE IF NOT EXISTS "question"(
    id VARCHAR(36) PRIMARY KEY NOT NULL UNIQUE,
    author_id VARCHAR(36) NOT NULL UNIQUE,
    title TEXT NOT NULL,
    context TEXT NOT NULL,
    updated_at TIME NOT NULL,
    is_deleted BOOLEAN NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users (id)
)

INSERT INTO question (id, author_id, title, context, updated_at, is_deleted) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174000', '123e4567-e89b-12d3-a456-426614174000', '有機農業について', '最近の農業における有機農法の普及率について、どのような影響を与えると思いますか？', NOW(), false),
    ('223e4567-e89b-12d3-a456-426614174001', '223e4567-e89b-12d3-a456-426614174001', '農薬使用の問題', '農薬の過剰使用が農業に与える悪影響は何ですか？', NOW(), false),
    ('323e4567-e89b-12d3-a456-426614174002', '323e4567-e89b-12d3-a456-426614174002', '農業労働者の待遇', '農業労働者の労働環境や待遇の改善について、どのような施策が有効だと思いますか？', NOW(), false),
    ('423e4567-e89b-12d3-a456-426614174003', '423e4567-e89b-12d3-a456-426614174003', '気候変動と農業', '気候変動が農業に及ぼす影響や対策について、どのように考えますか？', NOW(), false),
    ('523e4567-e89b-12d3-a456-426614174004', '523e4567-e89b-12d3-a456-426614174004', '持続可能な農業', '持続可能な農業の実現に向けて、どのような取り組みが必要だと思いますか？', NOW(), false),
    ('623e4567-e89b-12d3-a456-426614174005', '623e4567-e89b-12d3-a456-426614174005', '農業教育の重要性', '農業教育の普及が農業の未来に与える影響について、どのように考えますか？', NOW(), false),
    ('723e4567-e89b-12d3-a456-426614174006', '723e4567-e89b-12d3-a456-426614174006', '食料安全保障と農業', '食料安全保障の観点から、農業の役割や課題についてどう思いますか？', NOW(), false),
    ('823e4567-e89b-12d3-a456-426614174007', '823e4567-e89b-12d3-a456-426614174007', '農業と経済成長', '農業が地域や国の経済成長に与える影響や役割について、どのように考えますか？', NOW(), false),
    ('923e4567-e89b-12d3-a456-426614174008', '923e4567-e89b-12d3-a456-426614174008', '農業と地域社会', '農業が地域社会に与える影響や、地域社会との関係性について、どのように考えますか？', NOW(), false),
    ('a23e4567-e89b-12d3-a456-426614174009', 'a23e4567-e89b-12d3-a456-426614174009', '農業と健康', '農産物の栄養価や農薬の使用量が健康に与える影響について、どのよう',NOW(),false);
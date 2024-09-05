create table user (
    id int primary key AUTO_INCREMENT,
    name varchar(100),
    contactNumber varchar(20),
    email varchar(150),
    password varchar(100),
    status varchar(20),
    role varchar(20),
    UNIQUE(email)
);

insert into user (
    name, contactNumber, email, password, status, role
) values (
    'MOHAN', '9490903137', 'chennamks1@gmail.com', 'Bala#2024@','true','angularDeveloper'
);
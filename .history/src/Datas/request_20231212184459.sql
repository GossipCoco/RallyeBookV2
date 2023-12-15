CREATE TABLE NovelKind (
    Id nvarchar(255) NOT NULL PRIMARY KEY
)



alter table NovelKind 
ADD NovelId nvarchar(255)

alter table  NovelKind 
ADD FOREIGN KEY (NovelId) REFERENCES Novel(Id)




alter table  NovelKind 
ADD KindId nvarchar(255)

alter table  NovelKind 
ADD FOREIGN KEY (KindId) REFERENCES  Kind(Id)
CREATE TABLE Role (
    Id nvarchar(255) NOT NULL PRIMARY KEY
)



alter table [dbo].[User]
ADD RoleId nvarchar(255)

alter table [dbo].[User]
ADD FOREIGN KEY (RoleId) REFERENCES Role(Id)

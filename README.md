# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
|group_id|integer|

### Association
- has_many :messages
- has_many :members



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|E-mail|string|
|add_index|:users, :E-mails, unique: true|


### Association
- has_many :messages
- has_many :members



## messagesテーブル

|Column|Type|
|------|----|
|body|text|
|image|string|
|group_id|integer|
|user_id|integer|

### Association
- belongs_to :group
- belongs_to :user

json.content  @message.content
json.user_id  @message.user.id
json.user_name  @message.user.name
json.id @message.id
json.date format_posted_time(@message.created_at)
json.image @message.image.url

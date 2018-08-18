json.array! @new_message do |message|
  json.content message.content
  json.user_name    message.user.name
  json.image   message.image.url
  json.date    format_posted_time(message.created_at)
  json.id      message.id
end

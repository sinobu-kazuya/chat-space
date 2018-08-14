module ApplicationHelper
  def format_posted_time(time)
    fixed_time = time
    return fixed_time.strftime("%Y/%m/%d %H:%M")
  end
end

class Question < ActiveRecord::Base
  
  def get_comment_total(user, feed_item_id)
    uri = "/chatter/feed-items/#{feed_item_id}/comments"
    resp = Session.do_get(user, uri)
    resp.totals
  end
  

  
end

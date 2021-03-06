module QasHelper
  
  # Hack: puts in static images for known users to work around the lack of un-authenticated URLs
  # for static assets.
  def image_cheater(user_lastname)
    if user_lastname == 'Henriquez'
      image_tag("/images/henriquez_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )
    elsif user_lastname == 'Question'
      image_tag("/images/questioner_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )
    elsif user_lastname == 'Houston' 
      image_tag("/images/houston_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )
    elsif user_lastname == 'Cook'
      image_tag("/images/houston_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )
    eleif user_lastname == 'Cutter'
      image_tag("/images/cutter_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )
    elsif user_lastname == 'Chadraa'
      image_tag("/images/chadraa_thumb.jpeg", :size => "45x45", :class => 'profile-thumb' )  
    end
  end
  
  
  # formats into picker select format
  def records_for_picker(records)
    ret = []
    records.each_with_index do |record, i| 
      ret << [record['Name'], i ] 
    end
    ret
  end
  
end

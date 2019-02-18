import React from 'react';
import $ from "jquery";


export default function Image({ image }) {
test = () => {
      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
}
  
  return (
          <a  data-rel="lightbox" 
              href={image.urls.regular}
              data-toggle="lightbox">
            <img 
              className="rounded-pill m-2 border border-3 border-primary" 
              src={image.urls.thumb} alt='' />
          </a>
      );
    }
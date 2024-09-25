import { useState } from "react";

const BlogContent = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Handle comment submission
  };

  return (
    <div>
      <p className="text-dark mb-6 text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
        perspiciatis consectetur quidem quasi soluta voluptatem, nobis possimus.
        Labore, obcaecati itaque natus vitae aspernatur doloribus repudiandae
        explicabo cupiditate recusandae eius reiciendis impedit similique esse
        sint consequuntur. Maiores tempora dolor eius quae.
      </p>

      <img src="https://picsum.photos/1920/1080" />

      <h2 className="font-semibold text-3xl mt-8">Large Caption</h2>

      <p className="mt-2 text-dark text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
        perspiciatis consectetur quidem quasi soluta voluptatem, nobis possimus.
        Labore, obcaecati itaque natus vitae aspernatur doloribus repudiandae
        explicabo cupiditate recusandae eius reiciendis impedit similique esse
        sint consequuntur. Maiores tempora dolor eius quae.
      </p>

      <div>
        <h4 className="text-2xl mb-2 mt-8 text-dark">Leave a comment</h4>

        <div className="border">
          <div className="p-4">
            <textarea
              name="comment"
              rows={6}
              placeholder="Write a comment..."
              className="bg-transparent w-full focus:outline-none"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>

          <div className="p-4 border-t text-end">
            <button
              disabled={!comment}
              className="py-2 px-4 border rounded-md text-background-light bg-primary-dark disabled:text-dark disabled:text-opacity-50 disabled:bg-transparent"
              onClick={handleCommentSubmit}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

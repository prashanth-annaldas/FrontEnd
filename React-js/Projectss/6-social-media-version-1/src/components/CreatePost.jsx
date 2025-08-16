import { Form, redirect} from "react-router-dom";

function CreatePost(){

    return <Form method="POST" className="createPost">
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="text" name="userId" className="form-control" id="userId" placeholder="Enter userId"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input type="text" name="title" className="form-control" id="postTitle" placeholder="Title of the post"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea type="text" name="body" rows="4" className="form-control" id="body" placeholder="About the post.."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Reactions</label>
                    <input type="text" name="reactions" className="form-control" id="reactions" placeholder="How many people reacted.."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">HashTags</label>
                    <input type="text" name="tags" className="form-control" id="postTitle" placeholder="Enter #HashTags here.."/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
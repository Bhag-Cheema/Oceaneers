import React, { Component } from "react";
import firebase from "../firebase/firebase";

const storage = firebase.storage();
const db = firebase.firestore();

export default class AddEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      file: null,
      fileDisplay: null,
    };
    this.fileInputRef = React.createRef();
  }
  onImageSelected(e) {
    let file = null;
    if (e.target.files.length) {
      file = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (res) => {
        const display = res.target.result;
        this.setState({ fileDisplay: display });
      };
      reader.readAsDataURL(file);
    }

    this.setState({ file: file });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { file } = this.state;
    if (!file) {
      return;
    } // give feedback here
    this.uploadFile(file);
  }

  async uploadFile(file) {
    // debugger;
    const uploadTask = storage.ref("images/" + file.name).put(file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log("Upload " + percent + "% complete");
      },
      (err) => {
        alert(err);
      },
      async () => {
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        this.saveEvent(downloadUrl);
      }
    );
  }

  async saveEvent(downloadUrl) {
    // TODO: add try catch
    try {
        await db.collection("events").add({ downloadUrl: downloadUrl });
        this.props.history.push("/events");
    } catch (error) {
      console.log(error);  
    }
  }

  render() {
    const { fileDisplay } = this.state;
    return (
      <div>
        <h3 className="mb-4">Add Event</h3>

        <div className="card p-3">
          <div style={{ fontWeight: "bold" }}>Event Cover</div>

          {fileDisplay ? (
            <div className="text-center">
              <img
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={fileDisplay}
                alt="Event cover"
              />
            </div>
          ) : (
            <div></div>
          )}

          <input
            ref={this.fileInputRef}
            onChange={(e) => this.onImageSelected(e)}
            type="file"
            style={{ display: "none" }}
          />

          <div className="text-center">
            <button
              type="button"
              className="btn btn-success mt-3"
              onClick={() => this.fileInputRef.current.click()}
            >
              Choose Image
            </button>
          </div>
        </div>

        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Save Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}

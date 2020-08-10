import React from "react";
import './ImageUpload.scss';

class ImageUpload extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: ''
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading ', this.state.file);
    }
  
    handleImageChange = (event) => {
      event.preventDefault();
  
      let reader = new FileReader();
      let file = event.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        imagePreview = (<div className="previewText">Veuillez sélectionner une image pour l'aperçu</div>);
      }
  
      return (
        <div className="preview upload">
            <h3>Changer l'image</h3>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input className="fileInput" 
                type="file" 
                onChange={(event)=>this.handleImageChange(event)} />
                <button
                className="submitButton" 
                type="submit" 
                onClick={(event)=>this.handleSubmit(event)}
                name="Télécharger l'image">Télécharger l'image</button>
            </form>
            <div className="imgPreview">
                {imagePreview}
            </div>
        </div>
      )
    }
  }
    
export default ImageUpload;
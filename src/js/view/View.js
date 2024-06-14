import { createRoot } from "react-dom/client";
import RoomAudio from "../../RoomAudio";

class View{
    static _parentEl = createRoot(document.getElementById("root"));

    /**
     * Merender view dengan html string
     * @returns {} tidak ada
     * @example 
     * super.render();
     */
    render(){
        // markup html string yang akan di render
        const markup = this._generateMarkup();

        // Bersikan Root
        this._clear(); 
        
        // Menambahkan markup ke dalam parent el
        this._parentEl.insertAdjacentHTML("afterbegin", markup);

        // Menambahkan suara klik pada setiap btn
        this._parentEl.addEventListener("click", this.btnClicked);
    }

    /**
     * Render view dengan menggunakan html
     * @returns {} tidak ada
     * @example
     * super.renderView();
     */
    renderView(){
        // markup html yang akan di render
        const markup = this._generateMarkupView();

        // Render the view
        View._parentEl.render(markup);
    }

    /**
     * Membersikan view sebelumnya ketika view berganti
     * @returns {} tidak ada
     * @example
     * _clear();
     */
    _clear(){
        this._parentEl.textContent = "";
    }

    /**
     * 
     * @param {string} position - posisi progressbar
     * @returns {} tidak ada
     * @example
     * 
     */

    handlerMouseClickAudio(e){
        if(!e.target.classList.contains("btn")) return;
              
        RoomAudio.getAudio().mouseClick.play();
    }

    /**
     * Update the view 
     * @returns {} none
     * @example
     * super.update()
     */
    update(){
        const markup = this._generateMarkup();
        
        const newDOM = document.createRange().createContextualFragment(markup);
        const newElements = newDOM.querySelectorAll("*");
        const curElements = this._parentEl.querySelectorAll("*");
    
        newElements.forEach((newEl, i) => {
          const curEl = curElements[i];
          if(!newEl.isEqualNode(curEl)){
           [...newEl.attributes].forEach(attr =>{
              curEl.setAttribute(attr.name, attr.value);
            })
          }
    
        })
      }
      
    /**
     * Update view dengan menggunakan html
     * @returns {} tidak ada
     * @example
     * super.updateView();
     */
      updateView(){
        // markup html yang akan di update
        const markup = this._generateMarkupView();

        // Render the view
        View._parentEl.render(markup);
    }

    //Just For Game App
    btnClicked(e){
        if(!e.target.classList.contains("btn")) return;

        RoomAudio.getAudio().mouseClick.play();

    }
}

export default View;
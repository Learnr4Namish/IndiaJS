export class LinkHandler {
     constructor(URL, NewTab) {
          this.URL = URL;
          this.NewTab = NewTab;
     }
     OpenLink() {
         if(this.NewTab === true) {
              window.open(this.URL);
         }else
         if(this.NewTab === false) {
             window.location.href = this.URL;
         }
         else {
            this.ShowError("IndiaJS Fatal errror: No such link parameter in LinkHandler component!");
            return 1;
         }
     } 
     ShowError(error) {
         console.error(error);
         throw error;
     }
}
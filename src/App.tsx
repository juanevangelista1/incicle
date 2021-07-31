import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="Profile"> 
        <div className="imgProfileContainer"> 
          <img src="https://images.unsplash.com/photo-1508344910095-150ac7cf550c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Imagem de Perfil, Homem olhando o mar"/>
        </div>
        <div className= "userInfo"> 
            <strong className= "userName"> Juan Evangelista </strong>
          <p>@juanevangelista</p>
          <p> 
            <br/> Salvador - Bahia - Brasil <br/> 
          </p>
        </div>
          <div className="userLocation">  
          <p className = ""> Incicle UFBA </p> 
          </div>
      </div>

{/* Publicações */}      
      
      <div className="Post"> 
          <div className="Publish"> header - escreva uma publicação </div>
          <div className= "privatePublish"> 
          <div className = "imgProfile"><img src="https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Foto de perfil" />
          </div>
            
              <p>Essa publicação privada</p> 
              <button> curtir </button>
              <button> Comentários </button>
              <button> Compartilhar </button>
          </div>
          <div className= "openPublish"> Publicação 
            <button> curtir </button>
            <button> Comentários </button>
            <button> Compartilhar </button>
          </div>
          </div>

  {/* Painel de Avisos*/}        
      
      <div className= "Warning">
          <div className="Efficiency"> <strong>Eficiência</strong>  
            <div className = "Activies"> 
              <p> Atividades</p>
              <p> 50% </p>
              <p> 23/106 </p>
            </div>

            <div className = "Projects"> 
                <p>Projetos</p>
                <p> 50% </p>
                <p> 23/106 </p>   
              </div>
              <div className = "Total">
              <p> Atividades</p>
              <p> 50% </p>
              <p> 23/106 </p>
              </div>
          </div>

          <div className="Birthday"> <strong> Aniversariantes </strong>
          </div>
          <div className = "Pending"> <strong>Pendências</strong>  </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import logo from './logo.svg'
import Post from './components/post'
import { MdAlarm, MdAccountBalance } from 'react-icons/md'

function App() {
  return (
    <div className="container">
      <div className="Profile">
        <div className="imgProfileContainer">
          <img
            src="https://images.unsplash.com/photo-1508344910095-150ac7cf550c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Imagem de Perfil, Homem olhando o mar"
          />
        </div>
        <div className="userInfo">
          <strong className="userName"> Juan Evangelista </strong>
          <span className="userNickName">@juanevangelista</span>
          <span className="userRole">Front-end developer</span>
        </div>
        <div className="userLocations">
          <div className="city">
            <MdAccountBalance />
            <span>Salvador/Bahia - Brasil</span>
          </div>
          <div className="buildings">
            <div>
              <MdAccountBalance />
              <span>InCicle</span>
            </div>
            <div className="college">
              <MdAccountBalance />
              <span>InCicle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Publicações */}
      <div className="post">
        <Post isPrivate likes={0} share={0} comment={0} />
        <Post likes={1} share={3} comment={0} />
      </div>

      {/* Painel de Avisos*/}

      <div className="Warning">
        <div className="Efficiency">
          <h3 className="header">Eficiência</h3>
          <div className="border"></div>

          <div className="sectionContent">
            <div className="activitiesAndProjects">
              <div className="activities">
                <div className="activitiesInfo">
                  <span> Atividades </span>
                  <span> 23/106 </span>
                </div>
                <div className="percentInfo">
                  <span> 50% </span>
                </div>
              </div>
              <div className="Projects">
                <div className="projectInfo">
                  <span> Atividades </span>
                  <span> 23/106 </span>
                </div>
                <div className="percentInfo">
                  <span> 50% </span>
                </div>
              </div>
            </div>
            <div className="Total">
              <div className="totalInfo">
                <span> Total </span>
                <span> 23/106 </span>
              </div>

              <div className="percentInfo">
                <span> 50% </span>
              </div>
            </div>
          </div>

          <div className="tableTotal">
            <div className="activitiesTable">
              <p>Atividades</p>
              <ul className="efficiencyLists">
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="projectTable">
              <p>Projetos</p>
              <ul className="efficiencyLists">
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>3</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="totalTable">
              <p>Total</p>
              <ul className="efficiencyLists">
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>6</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>6</span>
                  </div>
                </li>
                <li className="efficiencyListsItem">
                  <div>
                    <span>Pendentes</span>
                    <span>6</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Birthday">
          <h3 className="header">Aniversariantes</h3>
          <div className="border"></div>

          <p>Nenhum dos seus amigos comemora aniversário hoje</p>
        </div>
        <div className="Pending">
          <h3 className="header">Pendências</h3>

          <div className="dateInfo">
            <p>Seg, 21 de jun</p>
          </div>
          <div className="pendingInfo">
            <span> Você não possui nenhuma pendência para hoje </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

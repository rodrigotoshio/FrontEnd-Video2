import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleEnviar = async () => {
    console.log("🚀 Botão clicado!")

    if (!nome.trim()) {
      setMensagem('Digite um nome válido.')
      return
    }

    try {
      console.log("📨 Enviando POST para API...")

      await axios.post('http://localhost:8080/Hello_World', { name: nome })

      console.log("✅ POST enviado. Agora fazendo GET...")

      const response = await axios.get('http://localhost:8080/Hello_World')

      console.log("📥 Resposta do GET:", response.data)

      setMensagem(response.data)
    } catch (error) {
      console.error("❌ Erro ao conectar com a API:", error)
      setMensagem('Erro ao conectar com a API.')
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🌍 Hello World com API</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
      <p className="mt-4 alert alert-info text-center">{mensagem}</p>
    </div>
  )
}

export default App

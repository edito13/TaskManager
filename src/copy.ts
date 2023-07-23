// // Conexão com o banco de dados
// const db = new AceBase("tasks");

// // Inserir tarefa
// app.post("/api/tasks", async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     // Implemente a inserção da tarefa no banco de dados usando o AceBase
//     const taskRef = db.ref("tasks").push({ title, description });
//     res.send("Tarefa inserida com sucesso");
//   } catch (error) {
//     res.status(500).send("Ocorreu um erro ao inserir a tarefa");
//   }
// });

// // Selecionar a tarefa
// app.get("/api/task/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Implemente a leitura de todas as tarefas do banco de dados usando o AceBase
//     const snapshot: DataSnapshot = await db.ref(`tasks/${id}`).get();
//     const task = snapshot.val();

//     if (task) res.json(task);

//     res.json([]);
//   } catch (error) {
//     res.status(500).send("Ocorreu um erro ao obter a tarefa");
//   }
// });

// // Selecionar todas as tarefas
// app.get("/api/tasks", async (req, res) => {
//   try {
//     // Implemente a leitura de todas as tarefas do banco de dados usando o AceBase
//     const snapshot: DataSnapshot = await db.ref("tasks").get();
//     const tasks = snapshot.val();

//     if (tasks) res.json(tasks);

//     res.json([]);
//   } catch (error) {
//     res.status(500).send("Ocorreu um erro ao obter as tarefas");
//   }
// });

// // Deletar uma tarefa
// app.delete("/api/tasks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Implemente a exclusão da tarefa com o ID fornecido do banco de dados usando o AceBase
//     await db.ref(`tasks/${id}`).remove();
//     res.send("Tarefa excluída com sucesso");
//   } catch (error) {
//     res.status(500).send("Ocorreu um erro ao excluir a tarefa");
//   }
// });

// // Editar uma tarefa
// app.put("/api/tasks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     // Implemente a atualização da tarefa com o ID fornecido no banco de dados usando o AceBase
//     await db.ref(`tasks/${id}`).set({ title, description });
//     res.send("Tarefa atualizada com sucesso");
//   } catch (error) {
//     res.status(500).send("Ocorreu um erro ao atualizar a tarefa");
//   }
// });

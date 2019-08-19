# Proyecto1
Entorno para desarrollo del proyecto 1 del módulo de Tópicos especiales en telemática

Avances:

En el commit numero 3 se empezó a realizar parte del backend en donde exactamante se hizo la creación de la base de datos en MongoDB y la conexión de esta, como tambien un primer acercamiento de las vistas correspondientes para autenticación de ususarios, registro de usuarios entre otros, con el fin de explorar y entender como es la interacción de estas con la base de datos.

Me di cuenta que antes de continuar con la autenticación de usuarios, registro y entre otros primero debia de tener unas vistas básicas o para decirlo mejor un motor de plantillas (Template Engine) para poder visualizar lo que anteriormente habia realizado y para lo que seguia despues que era el CRUD del registro de comentarios que al momento de implementar esto tuve algunos problemas pero no de mucha relevancia.

Una de los retos que tuve en este proyecto fue el de entender como era la auntenticación de usuarios debido a que no tenia conocimiento de este lenguaje de desarrollo y necesitaba de tiempo para entender como era el funcionamiento de esto, sumando tambien que otra dificultad de las que presenté fue el manejo de las sesiones de usuarios ya que necesitaba entneder muy bien como era la comunicación de estas con las vistas para cumplir con el objetivo de tener un manejo de sesiones adecuado.

Luego de esto continué con el Login / SignIn otra de las cosas que me ocupó tiempo en este proyecto fue la de entender o buscar la manera de encriptar las contraseñas creadas por el usuario como tambien el metodo POST ya que tenia que resolver que por la url no se filtrara información que enviaba a traves del formulario como por ejemplo el id del comentario que el usuario estaba creando o editando.

Despues de esto terminé de definir como iba a hacer la navegación del usuario por la aplicación y resolvi por utilizar una plantilla que podia aplicarse en todas las vistas de la aplicación, en otras palabras un navigator para que el usuario que estuviese en sesión pudiese realizar, editar o eliminar un comenatrio como tambien ingresar y salir de la aplicación sin nungun problema, aclarando que se hizó las validaciones respectivas de que si no estaba en sesión no podia realizar, ver y eliminar ningun comnetario, entre otros.

Mientras resolvía los inconvenientes mencionados anteriormente tambien miraba como desplegar el proyecto en el dca, en donde me di cuenta que para realizar esto tenia que ingresar la ip y clave asignada por la universidad, donde luego de esto clonaba el proyecto allí y por ultimo por medio de un comando construia la imagen del docker.





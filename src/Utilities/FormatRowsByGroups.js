module.exports = class {
  /**
   * 
   * @name api.Utilities.FormatRowsByGroups
   * @type Función
   * @parameter `rows:Array` Lista devuelta por un select con joins del SQL.
   * @parameter `groups:Array<String>` Lista de nombres  
   * @parameter `inListMode:Boolean` Si se prefiere una lista con objetos, en lugar de un objeto con identificadores. Por defecto: `true`.
   * @description A partir de los nombres de las columnas, que son compuestos de `{Tabla}.{Columna}`, se averiguan los diferentes ids de cada tabla, y se separan sus columnas y se devuuelve el resultado, que puede estar en formato objeto con ids, o en formato array directo.
   * @returns `lists:Object<Array<Object>> | lists:Object<Object<Object>>` Objeto con los grupos indicados (groups) como clave y las rows con las columnas agrupadas como valor.
   * Si `inListMode` es `true` se devuelve:
   *    - Un objeto donde las claves son los grupos y los valores son:
   *    - Arrays con los objetos como valores.
   * Si `inListMode` es `false` se devuelve:
   *    - Un objeto donde las claves son los grupos y los valores son:
   *    - Objetos donde las claves son los id de los objetos y los valores son los objetos.
   * 
   */
    action(rows, groups = [], inListMode = true) {
        this.api.Utilities.Trace("api.Utilities.FormatRowsByGroups");
        const data = {};
        for(let index=0; index<groups.length; index++) {
          const group = groups[index];
          data[group] = {};
        }
        for(let index_rows=0; index_rows<rows.length; index_rows++) {
          const row = rows[index_rows];
          for(let index_groups=0; index_groups<groups.length; index_groups++) {
            const group = groups[index_groups];
            for(let prop in row) {
                const value = row[prop];
                if(prop.startsWith(group + ".")) {
                    const group_id = row[group + ".id"];
                    if(typeof data[group][group_id] === "undefined") {
                        data[group][group_id] = {};
                    }
                    data[group][group_id][prop.replace(group + ".", "")] = value;
                }
            }
          }
        }
        if(!inListMode) {
            return data;
        }
        const lists = {}
        for(let index=0; index<groups.length; index++) {
            const group = groups[index];
            lists[group] = [];
            const ids_of_group = Object.keys(data[group]);
            for(let index_ids=0; index_ids<ids_of_group.length; index_ids++) {
              const id_of_group = ids_of_group[index_ids];
              lists[group].push(data[group][id_of_group]);
            }
        }
        return lists;
    }
};
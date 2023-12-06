module.exports = class {
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
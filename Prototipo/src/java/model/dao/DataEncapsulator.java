/*
 * Classe responsável por encapsular os dados 
 * recebidos do banco em uma lista de objetos JSON
 */

package model.dao;
import br.com.DBConnection.MySQLConnection;
import json.*;

public class DataEncapsulator {
    private QueryExecuter dao; //Objeto que executa queries e armazena dados de retorno
    private int rowCount; //Objeto que conta o número de registros retornados do banco
    private String response; //String que armazena lista de objetos JSON para retorno
    
    public DataEncapsulator() {
        dao = new QueryExecuter();
        rowCount = 0;
        response = "";
    }
    
    public String catchData() throws java.sql.SQLException {
        if(dao.doQuery("SELECT * FROM usuarios ORDER BY nome;")) {
            while(dao.rs.next()) rowCount++;
            JSONObject json[] = new JSONObject[rowCount];
            for(int i=0;i<rowCount;i++) json[i] = new JSONObject();
            
            dao.rs.beforeFirst();
            
            //Inserção da lista de retorno do banco em objetos JSON
            for(int j=0;dao.rs.next();j++) {
                for(int i=1;i<=dao.rsmd.getColumnCount();i++) {
                    switch(i) {
                        case 2:
                            json[j].put(dao.rsmd.getColumnName(i),dao.rs.getInt(i));
                            break;
                        case 4:
                            json[j].put(dao.rsmd.getColumnName(i),dao.rs.getDouble(i));
                            break;
                        default:
                            json[j].put(dao.rsmd.getColumnName(i),dao.rs.getString(i));
                            break;
                    }
                }
            }
            MySQLConnection.closeConnection(dao.con,dao.stmt,dao.rs);
            
            //agrupamento dos objetos JSON em lista
            response = "[";
            for(int i=0;i<rowCount;i++) {
                response += json[i].toString();
                if(i!=rowCount-1) response += ",";
            }
            response += "]";
        }
        return response;
    }
}

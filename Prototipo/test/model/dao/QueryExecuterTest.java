/*
 *  Codigo para testes de DQL
 *  Confira o retorno do banco de dados durante a execução
 *  Utilize a execução de testes do NetBeans (ctrl + F6)
 */


package model.dao;

import br.com.DBConnection.MySQLConnection;
import org.junit.Test;
import static org.junit.Assert.*;
import json.*;

public class QueryExecuterTest {
    
    public QueryExecuterTest() {
    }
    
    @Test
    public void catchQuery() throws java.sql.SQLException {
        QueryExecuter dao = new QueryExecuter();
        if(dao.doQuery("SELECT * FROM usuarios ORDER BY nome;")) {
            System.out.println("Gotcha");
            System.out.println("MySQL tem isso aqui, ó:\n");
            /*
            caso for conveniente printar os nomes das colunas
            for(int i=1;i<=dao.rsmd.getColumnCount();i++) System.out.print(dao.rsmd.getColumnName(i) + " | ");
            */
            while(dao.rs.next()) {
                for(int i=1;i<=dao.rsmd.getColumnCount();i++) {
                    System.out.print(dao.rs.getString(i) + " | ");
                }
                System.out.println("");
            }
            dao.rs.beforeFirst();
            
            int rows=0;
            while(dao.rs.next()) rows++;
            
            JSONObject json[] = new JSONObject[rows];
            for(int i=0;i<rows;i++) json[i] = new JSONObject();
            
            dao.rs.beforeFirst();
            for(int j=0;dao.rs.next();j++) {
                for(int i=1;i<=dao.rsmd.getColumnCount();i++) {
                    json[j].put(dao.rsmd.getColumnName(i), dao.rs.getString(i));
                    //System.out.print(dao.rs.getString(i) + " | ");
                }
            }
            System.out.println("Em JSON ficou assim:\n\n");
            for(int i=0;i<rows;i++) {
                System.out.println(json[i] + "\n");
            }
            MySQLConnection.closeConnection(dao.con, dao.stmt, dao.rs);
            
            String jsonResponse;
            jsonResponse = "[";
            for(int i=0;i<rows;i++) {
                jsonResponse += json[i].toString();
                if(i!=rows-1) jsonResponse += ",";
            }
            jsonResponse += "]";
            
            JSONArray jsonarray = new JSONArray();
             
            
            System.out.println("\n\nEm forma de vetor para response fica assim:\n\n");
            System.out.println(jsonResponse);
        } else {
            fail("Pegou não man");
        }
    }
}
/*
 * Classe que realiza a conexão com o MySQL
 * Será necessário revisar a porta utilizada pelo banco
 */
package br.com.DBConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLConnection {
    public static String status = "Não conectou";
    public static String url = "jdbc:mysql://localhost:3307/prototipo"; //Revise a porta
    public static String username = "root";
    public static String password = "";
    public static String driverName = "com.mysql.jdbc.Driver";
    
    public static Connection getConnection() {
        try {
            Class.forName(driverName);
            return DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException("Erro na Conexão", e);
        }
    }
    
        /*
    * Abaixo há 3 sobrecargas do método 
    * que realiza o fechamento da conexão.
    * Visto que há mais dois objetos adjacentes da
    * conexão que também precisam ser fechados
    */
    public static void closeConnection(Connection con) {
        if(con!=null) {
            try {
                con.close();
            } catch(SQLException e) {
                System.err.println("Erro: " + e);
            }
        }
    }
    public static void closeConnection(Connection con, PreparedStatement stmt) {
        if(stmt!=null) {
            try {
                stmt.close();
            } catch(SQLException e) {
                System.err.println("Erro: " + e);
            }
        }
        closeConnection(con);
    }
    public static void closeConnection(Connection con, PreparedStatement stmt, ResultSet rs) {
        if(rs!=null) {
            try {
                rs.close();
            } catch(SQLException e) {
                System.err.println("Erro: " + e);
            }
        }
        closeConnection(con, stmt);
    }
}

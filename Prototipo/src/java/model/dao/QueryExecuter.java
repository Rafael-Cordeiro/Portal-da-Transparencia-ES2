/*
 * Classe responsávl por executar queries no banco de dados
 * e armazenar os dados de retorno
 */

package model.dao;
import java.sql.*;
import br.com.DBConnection.MySQLConnection;

public class QueryExecuter {
    public Connection con = null;
    public ResultSet rs;
    public ResultSetMetaData rsmd;
    public PreparedStatement stmt = null;

    public QueryExecuter() {
        con = MySQLConnection.getConnection();
    }
    
    //Método executa query e retorna se bem sucedido
    public boolean doQuery(String sql) {       
        try {
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            rsmd = rs.getMetaData();
            return true;
        } catch (SQLException e) {
            System.err.println("Erro: " + e);
            return false;
        }
    }
}

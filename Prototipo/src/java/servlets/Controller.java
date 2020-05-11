/*
 * Classe Servlet única responsável por receber a request do client side
 * e retornar a lista de objetos JSON em formato "application/json"
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.dao.DataEncapsulator;

public class Controller extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
            DataEncapsulator capsula = new DataEncapsulator();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(capsula.catchData()); //Carrega o objeto out com a string de retorno
            out.flush(); //Devolve o JSON para o cliente
        } catch (SQLException ex) {
            System.out.println(ex);
        }
    }
}
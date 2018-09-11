package com.gms.web.exam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MariadbConn {
	
	public String exam() {
		Connection conn;
		Statement stmt;
		String s = "";
		try {
			try {
				Class.forName("org.mariadb.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			conn = DriverManager.getConnection("jdbc:mariadb://localhost:3306/mariadb", "mariadb", "mariadb");
			stmt = conn.createStatement();
			String sql = String.format("SELECT USERID FROM MEMBER");

			ResultSet rs = stmt.executeQuery(sql);
			if (rs.next()) {
				s = rs.getString("USERID");
			} else {
				s = "?��결실?��";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return s;

	}
}

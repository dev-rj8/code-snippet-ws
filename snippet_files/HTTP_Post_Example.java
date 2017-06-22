
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

public class PostHTTP {
	
	public static void main(String args[]) throws Exception{
		new PostHTTP().postJSONRequest("http://sentiment.vivekn.com/api/batch/", "Hello");
	}
	
	public void postJSONRequest(String urlStr, String name) throws IOException {
	    URL url = new URL(urlStr);
	    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
	    connection.setConnectTimeout(5000);//5 secs
	    connection.setReadTimeout(5000);//5 secs

	    connection.setRequestMethod("POST");
	    connection.setDoOutput(true);
	    connection.setRequestProperty("Content-Type", "application/json");

	    OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream());  
	    out.write("{\"name\" : \"Hello\"}");
	    out.flush();
	    out.close();

	    int res = connection.getResponseCode();

	    System.out.println(res);


	    InputStream is = connection.getInputStream();
	    BufferedReader br = new BufferedReader(new InputStreamReader(is));
	    String line = null;
	    while((line = br.readLine() ) != null) {
	        System.out.println(line);
	    }
	    connection.disconnect();
	}
}
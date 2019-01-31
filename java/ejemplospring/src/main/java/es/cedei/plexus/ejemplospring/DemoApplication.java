package es.cedei.plexus.ejemplospring;

import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

@SpringBootApplication
@Controller
public class DemoApplication {

	@GetMapping("/")
	public String hello(){
		return "hello";
	}

	@GetMapping("/sayhello")  
	@ResponseBody
	public String sayHello(){
		return "Im said Helloooooo";
	}

	@GetMapping("/empleado/{id}/cita")
	@ResponseBody
	public String juju(@PathVariable String id, HttpServletResponse response){
		 String p;
		p = id;
		if(p == "  kk" ){
			return "JOJO " + id ;
		}else {
			response.setStatus(404);
			return null;
		}	
	}

	@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="La cita no existe")
	@ExceptionHandler(NoHandlerFoundException.class)
	public void citaInexistente() {
		//vacio
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}

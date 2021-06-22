package lt2021.birzelis;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

public class ReactErrorHandler {
	@Value("classpath:public/index.html")
	private Resource index;

	@RequestMapping("/error")
	public ResponseEntity<Resource> index(HttpServletRequest request) {
		Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		if (status != null) {
			Integer statusCode = Integer.valueOf(status.toString());
			if (statusCode == HttpStatus.UNAUTHORIZED.value() || statusCode == HttpStatus.FORBIDDEN.value()) {
				return ResponseEntity.status(HttpStatus.valueOf(statusCode)).build();
			}
		}
		return ResponseEntity.ok(index);
	}

	public String getErrorPath() {
		return null;
	}

}

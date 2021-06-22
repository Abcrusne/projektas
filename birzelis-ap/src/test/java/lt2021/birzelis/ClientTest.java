package lt2021.birzelis;

import java.util.Date;
import java.util.List;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import lt2021.birzelis.client.Client;
import lt2021.birzelis.client.ClientType;
import lt2021.birzelis.client.CreateClientCommand;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = { App.class })
public class ClientTest {
	private static final String URI = "/api/clients";

	@Autowired
	private TestRestTemplate rest;

	@Test
	public void createsClient() {
		final String name = "testname";
		final String lastname = "testLastname";
		final Date birthdate = new Date();
		final String phoneNumber = "+37061231234";
		final ClientType type = ClientType.LOYAL;
		final CreateClientCommand cmd = new CreateClientCommand();

		cmd.setName(name);
		cmd.setLastname(lastname);
		cmd.setBirthdate(birthdate);
		cmd.setPhoneNumber(phoneNumber);
		cmd.setType(type);

		rest.postForLocation(URI, cmd);
		List<Client> users = rest.getForEntity(URI, List.class).getBody();

		Assert.assertThat(users.size(), CoreMatchers.is(1));
	}
}

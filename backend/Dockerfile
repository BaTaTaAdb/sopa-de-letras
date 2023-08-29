# Use an official Python runtime as the base image
FROM python:3.11.5-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Make .venv
RUN python -m venv /opt/venv

# Install the required packages
RUN /opt/venv/bin/python -m pip install --no-cache-dir -r requirements.txt

# TODO: FIX THIS GARBAGE
# Run app.py from waitress serve
#CMD ["/opt/venv/bin/python","-m waitress", "--port=8000", "--host 0.0.0.0", "app:app"]
CMD /opt/venv/bin/python -m waitress app:app
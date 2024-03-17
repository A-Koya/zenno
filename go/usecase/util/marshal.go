package util

import (
	"encoding/json"
	"fmt"
)

func Marshal(str interface{}) ([]byte, error) {
	jsonData, err := json.Marshal(str)
	if err != nil {
		fmt.Printf("err occured message:%s", err)
		return nil, err
	}
	return jsonData, nil
}
